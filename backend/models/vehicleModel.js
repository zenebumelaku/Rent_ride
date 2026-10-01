import { DataTypes } from "sequelize";
import { sequelize, addLegacyQueryCompatibility } from "../database.js";

const Vehicle = addLegacyQueryCompatibility(
  sequelize.define(
    "Vehicle",
    {
      _id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
      registeration_number: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      car_title: DataTypes.STRING,
      car_description: DataTypes.TEXT,
      created_at: DataTypes.STRING,
      updated_at: DataTypes.STRING,
      remark: DataTypes.STRING,
      company: DataTypes.STRING,
      name: DataTypes.STRING,
      model: DataTypes.STRING,
      year_made: DataTypes.INTEGER,
      fuel_type: {
        type: DataTypes.ENUM("petrol", "diesel", "electirc", "hybrid"),
      },
      rented_by: DataTypes.STRING,
      rating: DataTypes.JSONB,
      seats: DataTypes.INTEGER,
      transmition: { type: DataTypes.ENUM("manual", "automatic") },
      image: { type: DataTypes.JSONB, defaultValue: [] },
      description: DataTypes.TEXT,
      title: DataTypes.STRING,
      price: DataTypes.DOUBLE,
      base_package: DataTypes.STRING,
      with_or_without_fuel: DataTypes.BOOLEAN,
      insurance_end: DataTypes.DATE,
      registeration_end: DataTypes.DATE,
      pollution_end: DataTypes.DATE,
      certificates: { type: DataTypes.JSONB, defaultValue: {} },
      car_type: DataTypes.STRING,
      isDeleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      location: { type: DataTypes.STRING, allowNull: false },
      district: { type: DataTypes.STRING, allowNull: false },
      isBooked: { type: DataTypes.BOOLEAN, defaultValue: false },
      isAdminAdded: { type: DataTypes.BOOLEAN, defaultValue: true },
      addedBy: { type: DataTypes.STRING, defaultValue: "admin" },
      isAdminApproved: { type: DataTypes.BOOLEAN, defaultValue: true },
      isRejected: { type: DataTypes.BOOLEAN, defaultValue: false },
    },
    { tableName: "vehicles", timestamps: false },
  ),
);

export default Vehicle;
