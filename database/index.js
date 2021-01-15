const Sequelize = require('sequelize');

// Creates connection to mysql db using sequelize
module.exports = new Sequelize('customer_reviews', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});
