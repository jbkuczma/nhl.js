const nhl = require('../lib');
const should = require('should');

describe('nhl.games', () => {
  describe('schedule()', () => {
    it('should return games between the 1-9-18 and 1-11-18', done => {
      nhl.games
        .games({ startDate: '2018-01-09', endDate: '2018-01-11' })
        .then(data => {
          data.dates.length.should.equal(3);
          data.dates.forEach(date => {
            date.date.should.be.oneOf('2018-01-09', '2018-01-10', '2018-01-11');
          });
          done();
        })
        .catch(error => done(error));
    });
  });
});
