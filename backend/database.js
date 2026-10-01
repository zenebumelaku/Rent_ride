import "dotenv/config";
import { Sequelize, Op } from "sequelize";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL must be set to connect to PostgreSQL");
}

export const sequelize = new Sequelize(databaseUrl, {
  dialect: "postgres",
  logging: false,
  pool: { max: 10, min: 0, acquire: 30000, idle: 10000 },
  ...(process.env.DATABASE_SSL === "true"
    ? { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } } }
    : {}),
});

function toWhere(filter = {}) {
  const result = {};
  for (const [key, value] of Object.entries(filter ?? {})) {
    if (key === "$or" || key === "$and") {
      result[key === "$or" ? Op.or : Op.and] = value.map(toWhere);
    } else if (
      value &&
      typeof value === "object" &&
      !Array.isArray(value) &&
      !(value instanceof Date)
    ) {
      const operators = {
        $lt: Op.lt,
        $lte: Op.lte,
        $gt: Op.gt,
        $gte: Op.gte,
        $in: Op.in,
        $nin: Op.notIn,
        $ne: Op.ne,
      };
      const translated = {};
      for (const [operator, operand] of Object.entries(value)) {
        translated[operators[operator] ?? operator] = operand;
      }
      result[key] = translated;
    } else {
      result[key] = value;
    }
  }
  return result;
}

function unwrapUpdate(update = {}) {
  return update.$set ?? update;
}

export function addLegacyQueryCompatibility(Model) {
  const nativeFindOne = Model.findOne.bind(Model);

  Model.find = (filter = {}) => Model.findAll({ where: toWhere(filter) });
  Model.findOne = (filter = {}) => {
    const query = nativeFindOne({ where: toWhere(filter) });
    return {
      then: query.then.bind(query),
      catch: query.catch.bind(query),
      finally: query.finally.bind(query),
      lean: () => query.then((row) => row?.toJSON() ?? null),
    };
  };
  Model.findById = (id) => Model.findByPk(id);
  Model.findByIdAndUpdate = async (id, update, options = {}) => {
    const row =
      id && typeof id === "object"
        ? await nativeFindOne({ where: toWhere(id) })
        : await Model.findByPk(id);
    if (!row) return null;
    const before = row;
    await row.update(unwrapUpdate(update));
    return options.new ? row : before;
  };
  Model.findOneAndUpdate = async (filter, update, options = {}) => {
    const row = await nativeFindOne({ where: toWhere(filter) });
    if (!row) return null;
    const before = row;
    await row.update(unwrapUpdate(update));
    return options.new ? row : before;
  };
  Model.updateOne = async (filter, update) => {
    const [count] = await Model.update(unwrapUpdate(update), {
      where: toWhere(filter),
    });
    return { acknowledged: true, modifiedCount: count };
  };
  Model.findByIdAndDelete = async (id) => {
    const row = await Model.findByPk(id);
    if (!row) return null;
    await row.destroy();
    return row;
  };
  Model.insertMany = (rows) => Model.bulkCreate(rows);

  Model.prototype.toObject = function toObject() {
    return this.toJSON();
  };
  Object.defineProperty(Model.prototype, "_doc", {
    configurable: true,
    get() {
      return this.toJSON();
    },
  });
  return Model;
}

export { Op, toWhere };
