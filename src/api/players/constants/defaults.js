const DEFAULTS = {
  expand: [],
  season: 20172018,
  statType: 'statsSingleSeason'
}

export const PLAYER = {
  method: 'player',
  parameter: 'playerID',
  endpoint: '/people/{{playerID}}',
}

export const STATS = {
  method: 'stats',
  parameter: 'playerID',
  endpoint: '/people/{{playerID}}/stats?stats={{statType}}'
}
