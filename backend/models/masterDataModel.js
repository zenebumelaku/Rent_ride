import { DataTypes } from "sequelize";
import { sequelize, addLegacyQueryCompatibility } from "../database.js";

const MasterData = addLegacyQueryCompatibility(
  sequelize.define(
    "MasterData",
    {
      _id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
      id: { type: DataTypes.STRING, allowNull: false, unique: true },
      district: DataTypes.STRING,
      location: DataTypes.STRING,
      type: { type: DataTypes.ENUM("location", "car") },
      model: DataTypes.STRING,
      variant: DataTypes.STRING,
      photoUrl: DataTypes.STRING,
      brand: DataTypes.STRING,
    },
    { tableName: "master_data", timestamps: false },
  ),
);

export default MasterData;
