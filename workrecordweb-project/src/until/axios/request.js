// import qs from 'qs';
import axios from 'axios'
// import { request } from 'https';

const defaultTimeout = 20 * 2000;

axios.defaults.withCredentials = false;

export const MIMETYPE = {
  json: 'application/json;charset=utf-8',
  form: 'application/x-www-form-urlencoded;charset=utf-8'
}

export const RequestMethod = {
  get: 'GET',
  post: 'POST',
  put: 'PUT',
  delete: 'DELETE'
}

/**
* @method GET
* @param {String} url [请求url地址]
* @param {Object} params [请求时携带的参数]
*/
export function GET (url, params) {
  const config = {
    url,
    method: RequestMethod.get,
    params,
    headers: {
      Accept: MIMETYPE.json
    }
  }
  return Request(config)
}

/**
 * @method POST
 * @param {String} url [请求url地址]
 * @param {Object} params [请求时携带参数]
 */
export function POST (url, params) {
  const config = {
    url,
    method: Request.post,
    data: params,
    headers: {
      Accept: MIMETYPE.json,
      'Content-Type': MIMETYPE.json
    }
  }
  return Request(config)
}

/**
* @method PUT
* @param {String} url [请求url地址]
* @param {Object} params [请求时携带的参数]
*/
export function PUT (url, params) {
  const config = {
    url,
    method: RequestMethod.put,
    params,
    headers: {
      Accept: MIMETYPE.json
    }
  }
  return Request(config)
}

/**
 * @method DELETE
 * @param {String} url [请求url地址]
 * @param {Object} params [请求时携带参数]
 */
export function DELETE (url, params) {
  const config = {
    url,
    method: Request.delete,
    data: params,
    headers: {
      Accept: MIMETYPE.json,
      'Content-Type': MIMETYPE.json
    }
  }
  return Request(config)
}

/**
 * @method Request
 * @param {Object} config [请求的配置项]
 */
function Request (config) {
  const defaultConfig = {
    timeout: defaultTimeout,
    withCredentials: false,
    ...config
  }
  return new Promise((resolve, reject) => {
    axios.request(defaultConfig).then((response) => {
      resolve(response)
    })
  })
}
