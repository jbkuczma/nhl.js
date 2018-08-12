const DEFAULTS = {

}

export const ALL_CONFERENCES = {
  method: 'allConferences',
  endpoint: '/conferences',
}

export const ALL_DIVISIONS = {
  method: 'allDivisions',
  endpoint: '/divisions',
}

export const ALL_PROSPECTS = {
  method: 'allProspects',
  endpoint: '/draft/prospects'
}

export const CONFERENCE = {
  method: 'conference',
  parameter: 'CONFERENCE_ID',
  endpoint: '/conferences',
}

export const DIVISION = {
  method: 'division',
  parameter: 'divisionID',
  endpoint: '/divisions/{{divisionID}}',
}

export const DRAFT = {
  method: 'draft',
  parameter: 'draftYear',
  endpoint: '/draft/{{draftYear}}',
}

export const PROSPECT = {
  method: 'prospect',
  parameter: 'prospectID',
  endpoint: '/draft/prospects/prospectID',
}

export const STANDINGS = {
  expand: [
    'standings.record',
    'standings.division',
    'standings.conference'
  ],
  method: 'standings',
  endpoint: '/standings'
}
