import nhlFetch from './fetch'

/**
 * Make request and return a promise
 * @param {String} endpoint
 * @param {String} parameter
 * @return {Promise}
 */
export const work = (endpoint, parameter) => {
  console.log(endpoint)

  if (parameter !== undefined) {
    endpoint = `${endpoint}/${parameter}`
  }

  return new Promise((resolve, reject) => {
    nhlFetch(endpoint)
      .then(response => {
        if (response.status < 200 || response.status > 299) {
          reject(response)
        }
        return response.json()
      })
      .then(json => resolve(json))
      .catch(error => reject(error))
  })
}
