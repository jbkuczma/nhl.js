const DEFAULTS = {
  statType: 'statsSingleSeason'
}

export const PLAYER = {
  method: 'player',
  parameter: 'PLAYER_ID',
  endpoint: '/people',
}

export const STATS = {
  method: 'stats',
  parameter: 'playerID',
  endpoint: '/people/{{playerID}}/stats'
}
