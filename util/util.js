import jwt from 'jwt-decode'
import Immutable from 'immutable'

export const isTokenExpired = token => {
  const decoded = jwt(token)

  return decoded.exp < Date.now() / 1000
}

export const ucFirst = string => `${string.charAt(0).toUpperCase()}${string.slice(1)}`

export const makeImmutable = data => Immutable.fromJS(data)
