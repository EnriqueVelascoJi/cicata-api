const Sequelize = require('sequelize');
const { sequelize } = require('../database/index');

const Doctorado = sequelize.define(
  'Doctorado',
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

module.exports = Doctorado;
