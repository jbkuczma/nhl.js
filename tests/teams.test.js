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
      nhl.teams.team({ teamID: BUFFALO_SABRES_TEAM_ID }).then(data => {
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
    it('response should return roster of the team', done => {
      nhl.teams.roster({ teamID: BUFFALO_SABRES_TEAM_ID }).then(data => {
        if (data.hasOwnProperty('roster')) {
          done()
        } else {
          throw new Error('Roster was not found')
        }
      })
      .catch(error => done(error))
    })
  })
  describe('stats()', () => {
    it('response should return team stats', done => {
      nhl.teams.stats({ teamID: BUFFALO_SABRES_TEAM_ID }).then(data => {
        if (data.hasOwnProperty('stats')) {
          done()
        } else {
          throw new Error('Team stats were not found')
        }
      })
      .catch(error => done(error))
    })
  })
  describe('previousGame()', () => {
    it('should return the previous game for a team', done => {
      nhl.teams.previousGame({ teamID: BUFFALO_SABRES_TEAM_ID }).then(data => {
        if (data.teams[0].hasOwnProperty('previousGameSchedule')) {
          done()
        } else {
          throw new Error('Previous game not found')
        }
      })
      .catch(error => done(error))
    })
  })
  describe('nextGame()', () => {
    it('should return the next game for a team', done => {
      nhl.teams.nextGame({ teamID: BUFFALO_SABRES_TEAM_ID }).then(data => {
        if (data.teams[0].hasOwnProperty('nextGameSchedule')) {
          done()
        } else {
          throw new Error('Next game not found')
        }
      })
      .catch(error => done(error))
    })
  })
})
