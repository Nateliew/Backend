"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Stock extends Model {}
  Stock.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      symbol: DataTypes.STRING,
      name: DataTypes.STRING,
      price: DataTypes.FLOAT,
      percent: DataTypes.FLOAT,
      change: DataTypes.FLOAT,
      image: DataTypes.STRING,
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
    },
    {
      sequelize,
      modelName: "stock",
      underscored: true,
    }
  );
  return Stock;
};
