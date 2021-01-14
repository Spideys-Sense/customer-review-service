const Sequelize = require('sequelize');
const db = require('./index.js');

const Items = db.define('items', {})

const Reviews = db.define('reviews', {
  title: Sequelize.STRING,
  username: Sequelize.STRING,
  body: Sequelize.STRING(1000),
  date: Sequelize.DATE,
  rating: Sequelize.INTEGER,
  likes: Sequelize.INTEGER,
  imageUrl: Sequelize.STRING
});

Reviews.belongsTo(Items, {as: 'item'});

Items.sync();
Reviews.sync();

module.exports = {
  Reviews: Reviews,
  Items: Items
}