const nhl = require('../lib')

const JACK_EICHEL_PLAYER_ID = 8478403

describe('nhl.players', () => {
  describe('player()', () => {
    it('should return Jack Eichel', done => {
      nhl.players.player({ playerID: JACK_EICHEL_PLAYER_ID }).then(data => {
        const player = data.people[0]

        if (
          player.firstName === 'Jack' &&
          player.lastName === 'Eichel'
        ) {
          done()
        } else {
          throw new Error('Wrong player returned')
        }
      })
      .catch(error => done(error))
    })
  })
})
