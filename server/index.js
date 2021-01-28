const express = require('express');
const app = express();
const db = require('../database/index');
const { Reviews, Items } = require('../database/Model');
const path = require('path');
const PORT = 1111;
const Promise = require('bluebird');
const { Op } = require('sequelize');
const cors = require('cors');

// Displays client
app.use(express.static(path.join(__dirname, '../client/public')))

app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: 'http://localhost:1111',
}));

// Retrieves/sends all reviews that match search criteria
app.get('/api/:id/reviews', (req, res) => {
  // Defining sorting metrics
  const itemId = req.params.id;
  let sortBy = req.query.sort_by;
  let rating = (req.query.rating === '') ? [1, 2, 3, 4, 5] : (req.query.rating === '[4, 5]') ? [4, 5]: (req.query.rating === '[1, 2, 3]') ? [1, 2, 3] : req.query.rating;

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

app.get('/api/:id/reviewAverages', async (req, res) => {
  // Defining sorting metrics
  const itemId = req.params.id;
  var allAverages = [];
  const allReviews = await Reviews.findAll({
    where: {
      itemId,
    },
  });

  // Calculates and stores the average rating for this item
  let average = 0;
  allReviews.forEach((review) => {
    average += review.rating;
  });
  average /= allReviews.length;

  allAverages.push(average.toFixed(2));

  // Calculates and stores % distribution of star ratings for all reviews
  for (let starRating of [1, 2, 3, 4, 5]) {
    let reviews = await Reviews.findAll({
      where: {
        itemId,
        rating: starRating,
      }
    })

    allAverages.push((Math.floor((reviews.length / allReviews.length) * 100)).toString() + '%');
  }

  // Sent as: [averageRating, % of 1 star, % of 2 star...]
  res.send(allAverages);
});

app.get('/api/:id/photoReviews', (req, res) => {
  const itemId = req.params.id;
  return Reviews.findAll({
    where: {
      itemId,
      imageUrl: {
        [Op.ne]: null
      }
    }
  })
    .then((results) => {
      res.send(results);
    })
});

app.get('/api/:id/:review', (req, res) => {
  const itemId = req.params.id;
  const reviewId = req.params.review;
  return Reviews.findAll({
    where: {
      itemId,
      id: reviewId,
    }
  })
    .then((result) => {
      res.send(result);
    })
})

module.exports = app.listen(PORT, () => {
  console.log('Server listening on port: ' + PORT);
});
