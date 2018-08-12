import { DEFAULTS } from './constants'
import { work } from '../../utils/endpoint-worker'

Object.keys(DEFAULTS).forEach(key => {
  let obj = DEFAULTS[key]

  exports[obj.method] = (params) => work(obj, params)
})
