import nhlFetch from './fetch'

// if an endpoint contains {{ab...}} we need to insert a parameter
const PARAMETER_REGEX = /\{\{\w+\}\}/

/**
 *
 * @param {Object} o
 * @param {*} parameters
 */
const insertParameter = (o, parameter) => {
  let endpoint = o.endpoint
  const parameterToInsert = o.parameter
  return endpoint.split(`{{${parameterToInsert}}}`).join(parameter)
}

/**
 * Make request and return a promise
 * @param {Object} o
 * @param {String} parameter
 * @return {Promise}
 */
// export const work = (endpoint, parameter, expand) => {
export const work = (o, parameter, expand) => {
  let endpoint = o.endpoint
  const shouldInsertParameter = PARAMETER_REGEX.test(endpoint);

  if (shouldInsertParameter) {
    endpoint = insertParameter(o, parameter)
  }

  // if we don't need to insert the provided parameter in the middle of the endpoint, we add it to the end
  if (parameter !== undefined && !shouldInsertParameter) {
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
