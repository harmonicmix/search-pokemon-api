const path = require("path");
const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.js")[env];

const db = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
export default db;
