const nhl = require('../lib')

const BUFFALO_SABRES_TEAM_ID = 7

describe('nhl.teams', () => {
  describe('allTeams()', () => {
    it('should return 31 teams', (done) => {
      nhl.teams.allTeams().then(data => {
        if (data.teams.length === 31) {
          done()
        } else {
          throw new Error('31 teams were not returned')
        }
      })
      .catch(error => done(error))
    })
  })
  describe('team()', () => {
    it('should return the Buffalo Sabres', (done) => {
      nhl.teams.team(BUFFALO_SABRES_TEAM_ID).then(data => {
        if (data.teams.length === 1 && data.teams[0].name === 'Buffalo Sabres') {
          done()
        } else {
          throw new Error('The Buffalo Sabres were not returned')
        }
      })
      .catch(error => done(error))
    })
  })
})
