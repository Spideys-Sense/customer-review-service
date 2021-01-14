const Promise = require('bluebird');
const db = require('./index');

module.exports = {
  create: (db) => {
    return db.queryAsync(`
      CREATE DATABASE IF NOT EXISTS customer_reviews;

      USE customer_reviews;

      CREATE TABLE IF NOT EXISTS items (
        id INT NOT NULL AUTO_INCREMENT,
        PRIMARY KEY (id)
      );

      CREATE TABLE IF NOT EXISTS Reviews (
        id INTEGER NOT NULL AUTO_INCREMENT,
        item_id INT NOT NULL,
        title VARCHAR(55) DEFAULT NULL,
        username VARCHAR(255) DEFAULT NULL,
        body VARCHAR(510) DEFAULT NULL,
        date DATE DEFAULT NULL,
        rating INT DEFAULT NULL,
        likes INTEGER DEFAULT NULL,
        imageUrl VARCHAR DEFAULT NULL,
        PRIMARY KEY (id),
        FOREIGN KEY (item_id) REFERENCES items(id)
      );
    `)
      .catch((err) => {
        console.error(err);
      })
  }
}