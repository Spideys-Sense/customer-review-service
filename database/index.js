const mysql = require('mysql');
const dbConfig = require('./config');
const Promise = require('bluebird');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'customer_reviews'
});

const db = Promise.promisifyAll(connection, {multiArgs: true});

db.connectAsync()
  .then(() => console.log('Connected to Customer Reviews database'))
  .then(() => dbConfig.create(db));

module.exports = db;