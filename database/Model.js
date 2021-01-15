const Sequelize = require('sequelize');
const db = require('./index.js');

// Defines Items table
const Items = db.define('items', {});

// Defines Reviews table
const Reviews = db.define('reviews', {
  title: Sequelize.STRING,
  username: Sequelize.STRING,
  body: Sequelize.STRING(1000),
  date: Sequelize.DATE,
  rating: Sequelize.INTEGER,
  likes: Sequelize.INTEGER,
  imageUrl: Sequelize.STRING,
});

// Foreign key 'itemId' set on Reviews table
Reviews.belongsTo(Items, { as: 'item' });

module.exports = {
  Reviews,
  Items,
};
