import { DataTypes } from "sequelize";
import { sequelize, addLegacyQueryCompatibility } from "../database.js";

const Booking = addLegacyQueryCompatibility(
  sequelize.define(
    "Booking",
    {
      _id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
      vehicleId: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: { model: "vehicles", key: "_id" },
      },
      userId: {
        type: DataTypes.BIGINT,
        allowNull: true,
        references: { model: "users", key: "_id" },
        onDelete: "SET NULL",
      },
      pickupDate: { type: DataTypes.DATE, allowNull: false },
      dropOffDate: { type: DataTypes.DATE, allowNull: false },
      pickUpLocation: { type: DataTypes.STRING, allowNull: false },
      pickUpDistrict: DataTypes.STRING,
      dropOffLocation: { type: DataTypes.STRING, allowNull: false },
      totalPrice: { type: DataTypes.DOUBLE, allowNull: false },
      razorpayOrderId: { type: DataTypes.STRING, allowNull: false },
      razorpayPaymentId: { type: DataTypes.STRING, allowNull: false },
      createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
      status: {
        type: DataTypes.ENUM(
          "notBooked",
          "booked",
          "onTrip",
          "notPicked",
          "canceled",
          "overDue",
          "tripCompleted",
        ),
        defaultValue: "notBooked",
      },
    },
    { tableName: "bookings", timestamps: false },
  ),
);

export default Booking;
