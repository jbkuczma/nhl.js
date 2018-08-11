const nhl = require('../lib')

const BUFFALO_SABRES_TEAM_ID = 7

describe('nhl.teams', () => {
  describe('allTeams()', () => {
    it('should return 31 teams', done => {
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
    it('should return the Buffalo Sabres', done => {
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
  describe('roster()', () => {
    it('response should contain a roster property', done => {
      nhl.teams.roster(BUFFALO_SABRES_TEAM_ID).then(data => {
        if (data.teams.length === 1 && data.teams[0].hasOwnProperty('roster')) {
          done()
        } else {
          throw new Error('Roster was not found')
        }
      })
      .catch(error => done(error))
    })
  })
  describe('stats()', () => {
    it('response should contain a teamStats property', done => {
      nhl.teams.stats(BUFFALO_SABRES_TEAM_ID).then(data => {
        if (data.teams.length === 1 && data.teams[0].hasOwnProperty('teamStats')) {
          done()
        } else {
          throw new Error('TeamStats was not found')
        }
      })
      .catch(error => done(error))
    })
  })
})
