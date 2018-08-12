// nhl.js library test

const nhl = require('../lib')
const should = require('should')
const SUBMODULES = ['teams', 'players', 'league']

describe('index', () => {
  it('should export `teams`, `players`, `league` submodules', done => {
    nhl.should.have.properties(SUBMODULES)
    done()
  })
})

describe('submodule index', () => {
  it('should only export functions', done => {
    Object.keys(nhl).forEach(key => {
      if (key !== 'default') {
        const obj = nhl[key]
        Object.keys(obj).every(v => typeof obj[v] === 'function').should.be.true()
      }
    })
    done()
  })
})
