import settings from '../private/data/settings.json'

/**
 * Constructs HTTP request body
 * @param {string} method - HTTP verbs
 * @param {Object} data - HTTM request body
 * @returns {Object} - HTTP request body object or an empty object
 */
const constructBody = (method, data) => (
  method === 'POST' || method === 'PUT' ? {body: JSON.stringify(data)} : {}
)

/**
 * Returns a promise for an HTTP request
 * @async
 * @param {string} url - HTTP resource enpoint
 * @param {string} method - HTTP verbs
 * @param {Object} data - HTTP request body
 * @param {string} authToken - Authentication token
 * @returns {Promise} - Promise object of HTTP request
 */
const sendRequest = (url, method, data, authToken) => {
  const requestUrl = `${settings.baseUrl}${url}`

  return fetch(requestUrl, {
    method,
    headers: {
      Accept: 'application/json',
      Authorization: authToken,
      'Content-Type': 'application/json'
    },
    ...constructBody(method, data),
    credentials: 'include'
  })
}

export default sendRequest
