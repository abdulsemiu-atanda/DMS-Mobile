import settings from '../private/data/settings.json'

const constructBody = (method, data) => {
  return method === 'POST' || method === 'PUT' ? {body: JSON.stringify(data)} : {}
}

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
