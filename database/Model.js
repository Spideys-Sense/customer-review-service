const Sequelize = require('sequelize');
const db = require('./index.js');

//defines Items table
const Items = db.define('items', {})

//defines Reviews table
const Reviews = db.define('reviews', {
  title: Sequelize.STRING,
  username: Sequelize.STRING,
  body: Sequelize.STRING(1000),
  date: Sequelize.DATE,
  rating: Sequelize.INTEGER,
  likes: Sequelize.INTEGER,
  imageUrl: Sequelize.STRING
});

//foreign key 'itemId' set on Reviews table
Reviews.belongsTo(Items, {as: 'item'});

//adds tables to db if they don't exist
Items.sync();
Reviews.sync();

module.exports = {
  Reviews: Reviews,
  Items: Items
}