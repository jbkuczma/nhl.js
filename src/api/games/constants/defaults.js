const DEFAULTS = {
  expand: [],
  season: 20172018,
}

// less detailed than game(), player and team stats, team scratches
export const BOXSCORE = {
  method: 'boxscore',
  parameter: 'gameID',
  endpoint: '/game/{{gameID}}/boxscore'
}

// media related to game
export const CONTENT = {
  method: 'content',
  parameter: 'gameID',
  endpoint: '/game/{{gameID}}/content'
}

// all data pertaining to game - every play of game, who was involved, coordinates, etc.
export const GAME = {
  method: 'game',
  parameter: 'gameID',
  endpoint: '/game/{{gameID}}/feed/live'
}

export const GAMES = {
  method: 'games',
  expand: [
    'schedule.linescore'
  ],
  endpoint: '/schedule?teamId={{teamID}}&date={{date}}&startDate={{startDate}}&endDate={{endDate}}'
}
