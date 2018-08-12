const nhl = require('../lib')

describe('nhl.league', () => {
  describe('allConferences()', () => {
    it('should return 2 conferences', done => {
      nhl.league.allConferences().then(data => {
        data.conferences.should.have.length(2)
        done()
      })
      .catch(error => done(error))
    })
  })
  describe('allDivisions()', () => {
    it('should return 4 divisions', done => {
      nhl.league.allDivisions().then(data => {
        data.divisions.should.have.length(4)
        done()
      })
      .catch(error => done(error))
    })
  })
})
