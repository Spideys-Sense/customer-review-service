const mysql = require('mysql');
const Promise = require('bluebird');
const Sequelize = require('sequelize');

module.exports = new Sequelize('customer_reviews', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})