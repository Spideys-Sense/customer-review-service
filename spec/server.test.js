const { expect } = require('chai');
const chai = require('chai')
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const connection = require('../server/index');

/* ********************
SERVER ENDPOINT TESTING
******************** */
describe('Server', () => {
  describe('GET', () => {

    it('should have sorting capability', (done) => {
      chai.request(connection)
        .get(`/api/5/reviews/?sort_by=${'newest'}&rating=${''}`)
        .end((err, res) => {
          let reviews = res.body;
          for (let i = 0; i < reviews.length - 1; i++) {
            expect(reviews[i].date > reviews[i+1].date).to.be.true;
          }
          done();
      })
    });

    it('should be able to search by ratings', (done) => {
      chai.request(connection)
        .get(`/api/5/reviews/?sort_by=${'newest'}&rating=${'5'}`)
        .end((err, res) => {
          let reviews = res.body;
          reviews.forEach((review) => {
            expect(review.rating).to.equal(5);
          });
          done();
      })
    });

  })
});