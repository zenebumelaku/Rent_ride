import { DataTypes } from "sequelize";
import { sequelize, addLegacyQueryCompatibility } from "../database.js";

const User = addLegacyQueryCompatibility(
  sequelize.define(
    "User",
    {
      _id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
      username: { type: DataTypes.STRING, allowNull: false, unique: true },
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      phoneNumber: { type: DataTypes.STRING, unique: true },
      adress: DataTypes.STRING,
      password: { type: DataTypes.STRING, allowNull: false },
      profilePicture: {
        type: DataTypes.STRING,
        defaultValue:
          "https://media.istockphoto.com/id/1316420668/vector/user-icon-human-person-symbol-social-profile-icon-avatar-login-sign-web-user-symbol.jpg?s=612x612&w=0&k=20&c=AhqW2ssX8EeI2IYFm6-ASQ7rfeBWfrFFV4E87SaFhJE=",
      },
      isUser: { type: DataTypes.BOOLEAN, defaultValue: false },
      isAdmin: { type: DataTypes.BOOLEAN, defaultValue: false },
      isVendor: { type: DataTypes.BOOLEAN, defaultValue: false },
      refreshToken: { type: DataTypes.TEXT, defaultValue: "" },
    },
    { tableName: "users", timestamps: true },
  ),
);

export default User;
