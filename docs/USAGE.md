# Usage

* Importing the entire nhl.js library
```js
import nhl from 'nhl.js'
// or
const nhl = require('nhl.js')
```

* All API methods will return a promise
```js
nhl.players.player(PLAYER_ID).then(data => {
  console.log(data)
})
```

* ES7 async/await can also be used
```js
async function() {
  const data = await nhl.players.player(PLAYER_ID)
  console.log(data)
}
```
