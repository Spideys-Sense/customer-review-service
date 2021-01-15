const Promise = require('bluebird');
const db = require('./index');
const faker = require('faker');
const {Reviews, Items} = require('./Model');

let createItem = (itemId) => {
  return Items.create({})
    .catch(err => console.error(err));
}

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

let seed = () => {
  for (var i = 1; i < 11; i++) {
    createItem();
    for (var j = 1; j < 11; j++) {
      createReview(i);
    }
  }
}

seed();