const nhl = require('../lib')

const JACK_EICHEL_PLAYER_ID = 8478403

describe('nhl.players', () => {
  describe('player()', () => {
    it('should return Jack Eichel', done => {
      nhl.players.player(JACK_EICHEL_PLAYER_ID).then(data => {
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
    it('should throw an error when no PLAYER_ID is provided', done => {
      nhl.players.player()
      .then(data => {
        throw new Error('Request should throw an error when no PLAYER_ID is provided')
      })
      .catch(error => {
        done()
      })
    })
  })
})
