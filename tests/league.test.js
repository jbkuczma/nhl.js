const nhl = require('../lib')

describe('nhl.league', () => {
  describe('allConferences()', () => {
    it('should return 2 conferences', done => {
      nhl.league.allConferences().then(data => {
        if (data.conferences.length === 2) {
          done()
        } else {
          throw new Error('Incorrect number returned')
        }
      })
      .catch(error => done(error))
    })
  })
  describe('allDivisions()', () => {
    it('should return 4 divisions', done => {
      nhl.league.allDivisions().then(data => {
        if (data.divisions.length === 4) {
          done()
        } else {
          throw new Error('Incorrect number returned')
        }
      })
      .catch(error => done(error))
    })
  })
})
