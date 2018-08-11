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
  parameter: 'DIVISION_ID',
  endpoint: '/divisions',
}

export const DRAFT = {
  method: 'draft',
  parameter: 'DRAFT_YEAR',
  endpoint: '/draft',
}

export const PROSPECT = {
  method: 'prospect',
  parameter: 'PROSPECT_ID',
  endpoint: '/draft/prospects',
}
