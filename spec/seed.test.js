const { expect } = require('chai');

/* ************************
SETTING UP TESTING DATABASE
************************ */
const Sequelize = require('sequelize');

const db = new Sequelize('customer_reviews_spec', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

/* **********************
SETTING UP TESTING MODELS
********************** */
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

/* *************************
TESTING SEEDING FOR DATABASE
************************* */
const faker = require('faker');

// Creates a new row in the items table
const createItem = () => {
  Items.create({})
    .catch((err) => console.error(err));
};

// Creates a new row in the review table//
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

// Seeds the database
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

/* *********************
DATABASE SEEDING TESTING
********************* */
describe('Database', () => {

  it('should insert 10 rows to items table', async () => {
    await seed();
    return Items.findAll()
      .then((items) => {
        expect(items).to.have.lengthOf(10)
      });
  });

  it('should insert 100 rows to reviews table', async () => {
    await seed();
    return Reviews.findAll()
      .then((reviews) => {
        expect(reviews).to.have.lengthOf(100)
      });
  })

})