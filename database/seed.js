const faker = require('faker');
const { Reviews, Items } = require('./Model');
const db = require('./index');

// Creates a row in the items table
const createItem = () => (
  Items.create({})
    .catch((err) => console.error(err))
);

// Creates a row in the reviews table
const createReview = () => {
  const currReviewData = {
    itemId: (Math.floor(faker.random.number() % 10) + 1),
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
const seed = async () => {
  await db.drop();
  await db.sync();

  for (let i = 0; i < 10; i += 1) {
    await createItem();
  }
  for (let j = 0; j < 100; j += 1) {
    await createReview();
  }
};

seed();
