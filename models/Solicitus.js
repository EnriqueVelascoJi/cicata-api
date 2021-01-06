const Sequelize = require('sequelize');
const { sequelize } = require('../database/index');

const Solicitud = sequelize.define(
  'Solicitud',
  {
    convocatoria: {
        type: Sequelize.DATE,
        primaryKey: true,
      },
    fechaSolicitud: {
      type: Sequelize.DATE,
    },
    isSubmmited: {
      type: Sequelize.BOOLEAN,
    },
    state: {
      type: Sequelize.STRING,
    },
    observaciones: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Solicitud;
