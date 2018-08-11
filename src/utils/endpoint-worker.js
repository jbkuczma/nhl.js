import nhlFetch from './fetch'

/**
 * Make request and return a promise
 * @param {String} endpoint
 * @param {String} parameter
 * @return {Promise}
 */
export const work = (endpoint, parameter, expand) => {

  // usually the parameters is the last part of the endpoint url
  if (parameter !== undefined) {
    endpoint = `${endpoint}/${parameter}`
  }

  if (expand !== undefined) {
    const expanded = expand.join(',')
    endpoint = `${endpoint}?expand=${expanded}`
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
