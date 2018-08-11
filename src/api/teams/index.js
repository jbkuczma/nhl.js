import { DEFAULTS } from './constants'
import { work } from '../../utils/endpoint-worker'

Object.keys(DEFAULTS).forEach(key => {
  let obj = DEFAULTS[key]

  // some functions will have the `expand` query parameter. this ensures that we use what is defined in DEFAULTS
  let expanded = obj.expand === undefined ? [] : obj.expand

  exports[obj.method] = (params) => work(obj.endpoint, params, expanded)
})
