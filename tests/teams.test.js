const nhl = require('../lib');
const should = require('should');
const BUFFALO_SABRES_TEAM_ID = 7;

describe('nhl.teams', () => {
  describe('allTeams()', () => {
    it('should return 31 teams', done => {
      nhl.teams
        .allTeams()
        .then(data => {
          data.teams.should.have.length(31);
          done();
        })
        .catch(error => done(error));
    });
  });
  describe('team()', () => {
    it('should return the Buffalo Sabres', done => {
      nhl.teams
        .team({ teamID: BUFFALO_SABRES_TEAM_ID })
        .then(data => {
          data.teams.should.have.length(1);
          data.teams[0].should.have.property('name').eql('Buffalo Sabres');
          done();
        })
        .catch(error => done(error));
    });
  });
  describe('roster()', () => {
    it('response should return roster of the team', done => {
      nhl.teams
        .roster({ teamID: BUFFALO_SABRES_TEAM_ID })
        .then(data => {
          data.should.have.property('roster');
          done();
        })
        .catch(error => done(error));
    });
  });
  describe('stats()', () => {
    it('response should return team stats', done => {
      nhl.teams
        .stats({ teamID: BUFFALO_SABRES_TEAM_ID })
        .then(data => {
          data.should.have.property('stats');
          done();
        })
        .catch(error => done(error));
    });
  });
  describe('previousGame()', () => {
    it('should return the previous game for a team', done => {
      nhl.teams
        .previousGame({ teamID: BUFFALO_SABRES_TEAM_ID })
        .then(data => {
          data.teams.should.have.length(1);
          data.teams[0].should.have.property('previousGameSchedule');
          done();
        })
        .catch(error => done(error));
    });
  });
  describe('nextGame()', () => {
    it('should return the next game for a team', done => {
      nhl.teams
        .nextGame({ teamID: BUFFALO_SABRES_TEAM_ID })
        .then(data => {
          data.teams.should.have.length(1);
          data.teams[0].should.have.property('nextGameSchedule');
          done();
        })
        .catch(error => done(error));
    });
  });
});
