// nhl.js library test

const nhl = require('../lib')
const should = require('should')

describe('index', () => {
  it('should export `teams`, `players`, `league` submodules', done => {
    nhl.should.have.properties(['teams', 'players', 'league'])
    done()
  })
})
