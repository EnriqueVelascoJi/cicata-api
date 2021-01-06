const Sequelize = require('sequelize');
const { sequelize } = require('../database/index');

const UsuarioDG = sequelize.define(
  'users',
  {
    curp: {
      type: Sequelize.STRING(18),
      primaryKey: true,
    },
    nombre: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    apellidos: {
      type: Sequelize.STRING,
    },
    tipoUsuario: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = UsuarioDG;
