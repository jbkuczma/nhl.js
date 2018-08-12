import nhlFetch from './fetch'

// if an endpoint contains {{ab...}} we need to insert a parameter
const PARAMETER_REGEX = /\{\{\w+\}\}/

/**
 *
 * @param {Object} o
 * @param {Object} parameters
 */
const insertParameter = (o, parameters) => {
  let endpoint = o.endpoint

  Object.keys(parameters).forEach(key => {
    endpoint = endpoint.split(`{{${key}}}`).join(parameters[key])
  })

  if(o.hasOwnProperty('expand')) {
    const expand = o.expand
    endpoint = `${endpoint}?expand=${expand.join(',')}`
  }

  return endpoint
}

/**
 * Make request and return a promise
 * @param {Object} o
 * @param {Object} parameter
 * @return {Promise}
 */
export const work = (o, parameters) => {
  if (parameters !== undefined && typeof parameters !== 'object') {
    throw new Error('Object was not passed')
  }

  let endpoint = o.endpoint
  const shouldInsertParameter = PARAMETER_REGEX.test(endpoint);

  if (shouldInsertParameter) {
    endpoint = insertParameter(o, parameters)
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
