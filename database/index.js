const mysql = require('mysql');
const Sequelize = require('sequelize');

//creates connection to mysql db using sequelize
module.exports = new Sequelize('customer_reviews', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})