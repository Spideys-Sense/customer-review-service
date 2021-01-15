const faker = require('faker');
const { Reviews, Items } = require('./Model');

// Creates a row in the items table
const createItem = () => (
  Items.create({})
    .catch((err) => console.error(err))
);

// Creates a row in the reviews table
const createReview = (itemId) => {
  const currReviewData = {
    itemId,
    title: faker.random.words(),
    username: faker.name.findName(),
    body: faker.lorem.paragraph(),
    date: faker.date.past(),
    rating: (Math.floor(faker.random.number() % 5) + 1),
    likes: faker.random.number(),
    imageUrl: faker.image.imageUrl(),
  };

  return Reviews.create(currReviewData)
    .catch((err) => console.error(err));
};

// Seeds db with random data (10 items, 100 reviews)
const seed = () => {
  for (let i = 1; i < 11; i += 1) {
    createItem();
    for (let j = 1; j < 11; j += 1) {
      createReview(i);
    }
  }
};

seed();
