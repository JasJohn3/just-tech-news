const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW,{
  host: 'localhost',
  dialect: 'mysql',
  port:5000
})

module.exports = sequelize;