# Example Usage


### Teams `nhl.teams`

- [List of methods](api/TEAMS.md)
- Get a Team
```js
  const nhl = require('nhl.js')
  const BUFFALO_SABRES_TEAM_ID = 7

  nhl.teams.team(BUFFALO_SABRES_TEAM_ID).then(data => {
    const sabres = data.teams[0]
    console.log(sabres)
  })

  /*
    {
      id: 7,
      name: 'Buffalo Sabres',
      link: '/api/v1/teams/7',
      venue: [Object],
      abbreviation: 'BUF',
      teamName: 'Sabres',
      locationName: 'Buffalo',
      firstYearOfPlay: '1970',
      division: [Object],
      conference: [Object],
      franchise: [Object],
      shortName: 'Buffalo',
      officialSiteUrl: 'http://www.sabres.com',
      franchiseId: 19,
      active: true
    }
  */
```
