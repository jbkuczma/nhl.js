const DEFAULTS = {

}

export const ALL_TEAMS = {
  method: 'allTeams',
  endpoint: '/teams',
}

export const TEAM = {
  method: 'team',
  parameter: 'TEAM_ID',
  endpoint: '/teams'
}

// https://statsapi.web.nhl.com/api/v1/teams/7/roster instead (?)
export const TEAM_ROSTER = {
  // expand: [
  //   'team.roster'
  // ],
  // method: 'roster',
  // parameter: 'TEAM_ID',
  // endpoint: '/teams'
  method: 'roster',
  parameter: 'teamID',
  endpoint: `/teams/{{teamID}}/roster`
}

export const TEAM_STATS = {
  // expand: [
  //   'team.stats'
  // ],
  // method: 'stats',
  // parameter: 'TEAM_ID',
  // endpoint: '/teams'
  method: 'stats',
  parameter: 'teamID',
  endpoint: '/teams/{{teamID}}/stats'
}
