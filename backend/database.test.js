import assert from "node:assert/strict";
import test from "node:test";
import { addLegacyQueryCompatibility, Op, toWhere } from "./database.js";

test("toWhere translates nested legacy logical and comparison operators", () => {
  const pickupDate = new Date("2026-10-01T12:00:00.000Z");
  const dropOffDate = new Date("2026-10-02T12:00:00.000Z");
  const where = toWhere({
    $or: [
      { pickupDate: { $lt: dropOffDate, $gte: pickupDate } },
      {
        $and: [
          { status: { $in: ["booked", "onTrip"] } },
          { userId: { $ne: null } },
        ],
      },
    ],
  });

  assert.equal(where[Op.or][0].pickupDate[Op.lt], dropOffDate);
  assert.equal(where[Op.or][0].pickupDate[Op.gte], pickupDate);
  assert.deepEqual(where[Op.or][1][Op.and][0].status[Op.in], [
    "booked",
    "onTrip",
  ]);
  assert.equal(where[Op.or][1][Op.and][1].userId[Op.ne], null);
});

test("legacy find methods translate filters and lean returns plain data", async () => {
  class FakeModel {
    static findAll(options) {
      this.lastFindAllOptions = options;
      return Promise.resolve([]);
    }

    static findOne(options) {
      this.lastFindOneOptions = options;
      return Promise.resolve({ toJSON: () => ({ _id: 7, status: "booked" }) });
    }
  }

  addLegacyQueryCompatibility(FakeModel);

  assert.deepEqual(await FakeModel.find({ status: "booked" }), []);
  assert.deepEqual(FakeModel.lastFindAllOptions.where, { status: "booked" });
  assert.deepEqual(await FakeModel.findOne({ _id: 7 }).lean(), {
    _id: 7,
    status: "booked",
  });
  assert.deepEqual(FakeModel.lastFindOneOptions.where, { _id: 7 });
});

test("findByIdAndUpdate unwraps $set and returns the updated row when requested", async () => {
  const row = {
    _id: 12,
    status: "notBooked",
    async update(values) {
      Object.assign(this, values);
      return this;
    },
  };

  class FakeModel {
    static findOne() {
      return Promise.resolve(null);
    }

    static findByPk(id) {
      return Promise.resolve(id === row._id ? row : null);
    }
  }

  addLegacyQueryCompatibility(FakeModel);

  const updated = await FakeModel.findByIdAndUpdate(
    12,
    { $set: { status: "booked" } },
    { new: true },
  );

  assert.equal(updated.status, "booked");
  assert.equal(
    await FakeModel.findByIdAndUpdate(99, { status: "booked" }),
    null,
  );
});
