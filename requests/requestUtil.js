const sendRequest = (url, method, data, authToken) => {
  const requestUrl = `https://docman-api.herokuapp.com/api/${url}`

  return fetch(requestUrl, {
    method,
    headers: {
      Accept: 'application/json',
      Authorization: authToken,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}

export default sendRequest
