const axios = require('axios');

describe('Server', () => {
  describe('GET', () => {

    it('should have sorting capability', () => {
      axios.get('/api/5/reviews', {
        params: {
          sort_by: 'highest_rating'
        }
      })
        .then((results) => {
          if (results.length > 1) {
            expect(results[0].rating > results[1].rating).to.be.true;
          }
        })
    });

    it('should filter by ratings', () => {

    });

  })
});