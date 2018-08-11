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
      "id" : 7,
      "name" : "Buffalo Sabres",
      "link" : "/api/v1/teams/7",
      "venue" : {
        "name" : "KeyBank Center",
        "link" : "/api/v1/venues/null",
        "city" : "Buffalo",
        "timeZone" : {
          "id" : "America/New_York",
          "offset" : -4,
          "tz" : "EDT"
        }
      },
      "abbreviation" : "BUF",
      "teamName" : "Sabres",
      "locationName" : "Buffalo",
      "firstYearOfPlay" : "1970",
      "division" : {
        "id" : 17,
        "name" : "Atlantic",
        "link" : "/api/v1/divisions/17"
      },
      "conference" : {
        "id" : 6,
        "name" : "Eastern",
        "link" : "/api/v1/conferences/6"
      },
      "franchise" : {
        "franchiseId" : 19,
        "teamName" : "Sabres",
        "link" : "/api/v1/franchises/19"
      },
      "shortName" : "Buffalo",
      "officialSiteUrl" : "http://www.sabres.com",
      "franchiseId" : 19,
      "active" : true
    }
  */
```
