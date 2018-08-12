import { DEFAULTS } from './constants'
import { work } from '../../utils/endpoint-worker'

Object.keys(DEFAULTS).forEach(key => {
  let obj = DEFAULTS[key]

  let expanded = obj.expand === undefined ? [] : obj.expand

    exports[obj.method] = (params) => work(obj, params, expanded)
})
