const Promise = require('bluebird');
const db = require('./index');
const faker = require('faker');
const {Reviews, Items} = require('./Model');

//creates a row in the items table
let createItem = (itemId) => {
  return Items.create({})
    .catch(err => console.error(err));
}

//creates a row in the reviews table
let createReview = (itemId) => {
  var currReviewData = {
    itemId: itemId,
    title: faker.random.words(),
    username: faker.name.findName(),
    body: faker.lorem.paragraph(),
    date: faker.date.past(),
    rating: (Math.floor(faker.random.number() % 5) + 1),
    likes: faker.random.number(),
    imageUrl: faker.image.imageUrl()
  }

  return Reviews.create(currReviewData)
    .catch(err => console.error(err));
}

//seeds db with random data (10 items, 100 reviews)
let seed = () => {
  for (var i = 1; i < 11; i++) {
    createItem();
    for (var j = 1; j < 11; j++) {
      createReview(i);
    }
  }
}

seed();