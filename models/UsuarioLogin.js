const Sequelize = require('sequelize');
const { sequelize } = require('../database/index');

const UsuarioLogin = sequelize.define(
  'UsuarioLogin',
  {
    password: {
      type: Sequelize.STRING,
    },
    pregunta1: {
      type: Sequelize.STRING,
    },
    pregunta2: {
      type: Sequelize.STRING,
    },
    respuesta1: {
        type: Sequelize.STRING,
    },
    respuesta2: {
        type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = UsuarioLogin;
