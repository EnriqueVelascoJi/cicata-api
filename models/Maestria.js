const Sequelize = require('sequelize');
const { sequelize } = require('../database/index');

const Maestria = sequelize.define(
  'Maestria',
  {
    solicitudCURP: {
        type: Sequelize.DATE,
        primaryKey: true,
    },
    
  },
  {
    timestamps: false,
  }
);

module.exports = Maestria;
