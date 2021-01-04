const Sequelize = require('sequelize');
const { sequelize } = require('../database/index');

const User = sequelize.define(
  'users',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    priority: {
      type: Sequelize.INTEGER,
    },
    description: {
      type: Sequelize.TEXT,
    },
    deliveryDate: {
      type: Sequelize.DATE,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = User;
