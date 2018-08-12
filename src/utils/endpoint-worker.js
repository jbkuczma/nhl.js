import nhlFetch from './fetch'

// if an endpoint contains {{...}} we need to insert a parameter
const PARAMETER_REGEX = /\{\{\w+\}\}/

/**
 *
 * @param {Object} constants - endpoint constants
 * @param {Object} parameters - query information
 */
const constructEndpoint = (constants, parameters) => {
  let endpoint = constants.endpoint

  Object.keys(parameters).forEach(key => {
    let value = parameters[key]

    // expand property was provided
    if (typeof value === 'array') {
      value = value.join(',')
    }

    endpoint = endpoint.split(`{{${key}}}`).join(value)
  })

  if(constants.hasOwnProperty('expand') && !parameters.hasOwnProperty('expand')) {
    const expand = constants.expand
    endpoint = `${endpoint}?expand=${expand.join(',')}`
  }

  return endpoint
}

/**
 * Make request and return a promise
 * @param {Object} constants - endpoint constants
 * @param {Object} parameters - query information
 * @return {Promise} - response of request
 */
export const work = (constants, parameters) => {
  if (parameters !== undefined && typeof parameters !== 'object') {
    throw new Error('Object was not passed')
  }

  let endpoint = constants.endpoint
  const shouldConstructEndpoint = PARAMETER_REGEX.test(endpoint);

  if (shouldConstructEndpoint) {
    endpoint = constructEndpoint(constants, parameters)
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
