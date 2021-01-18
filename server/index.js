const express = require('express');
const app = express();
const db = require('../database/index');
const {Reviews, Items} = require('../database/Model');
const path = require('path');
const bodyParser = require('body-parser');
const PORT = 3000;

// Displays client
app.use(express.static(path.join(__dirname, '../client/public')))
// app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Retrieves/sends all reviews that match search criteria
app.get('/api/:id/reviews', (req, res) => {

  // Defining sorting metrics
  const itemId = req.params.id;
  let sortBy = req.query.sort_by;
  let rating = (req.query.rating === '') ? [1, 2, 3, 4, 5] : req.query.rating;
  console.log('TESTTTTTTTTTTTTTTTTTTTTTTTTTTTTT')
  // Converts sortBy metric to sequelize syntax
  if (sortBy === 'newest') {
    sortBy = [['date', 'DESC']];
  } else if (sortBy === 'oldest') {
    sortBy = [['date', 'ASC']];
  } else if (sortBy === 'highest_rating') {
    sortBy = [['rating', 'DESC']];
  } else if (sortBy === 'lowest_rating') {
    sortBy = [['rating', 'ASC']];
  }

  // Sends all results that match search criteria
  return Reviews.findAll({
    where: {
      itemId,
      rating,
    },
    order: sortBy
  })
    .then((results) => {
      res.send(results);
    })

});

// Connects & listens to server on designated port
module.exports = app.listen(PORT, () => {
  console.log('Server listening on port: ' + PORT);
})