const sequelize = require('sequelize');
require('dotenv').config();
const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PW = process.env.DB_PW;
const sequelize = new sequelize(DB_NAME, DB_USER, DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
})

module.exports = sequelize;