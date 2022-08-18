const Sequelize = require("sequelize");
const config = require('../../config/index');

const { DATABASE_NAME, DATABASE_USER, DATABASE_PASS, DATABASE_HOST, DATABASE_PORT, DATABASE_DIALECT } = config;
const sequelize = new Sequelize(
  DATABASE_NAME,
  DATABASE_USER,
  DATABASE_PASS,
  {
    host: DATABASE_HOST,
    port: DATABASE_PORT,
    dialect: DATABASE_DIALECT,
    define: {
      timestamps: false
    }
  }
);

module.exports = sequelize;