const nhl = require('../lib')
const should = require('should')

const JACK_EICHEL_PLAYER_ID = 8478403

describe('nhl.players', () => {
  describe('player()', () => {
    it('should return Jack Eichel', done => {
      nhl.players.player({ playerID: JACK_EICHEL_PLAYER_ID }).then(data => {
        const player = data.people[0]
        player.should.have.property('firstName').eql('Jack')
        player.should.have.property('lastName').eql('Eichel')
        done()
      })
      .catch(error => done(error))
    })
  })
})
