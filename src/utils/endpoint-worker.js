import nhlFetch from './fetch'

/**
 * Make request and return a promise
 * @param {String} endpoint
 * @return {Promise}
 */
export const work = (endpoint) => {
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
