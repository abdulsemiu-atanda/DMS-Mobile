import jwt from 'jwt-decode'
import Immutable from 'immutable'

/**
 * Checks if a token has expired
 * @param {string} token - Valid jwt token
 * @returns {boolean}
 */
export const isTokenExpired = token => {
  const decoded = jwt(token)

  return decoded.exp < Date.now() / 1000
}

/**
 * Makes the first letter of a string capital
 * @param {string} string
 * @returns {string} - String with capital first letter
 */
export const ucFirst = string => `${string.charAt(0).toUpperCase()}${string.slice(1)}`

/**
 * Converts Javascript Object or Array into Immutable Map or List appropriately
 * @param {(Object|Array)} data
 * @returns {(Map|List)} - Immutable map or list
 */
export const makeImmutable = data => Immutable.fromJS(data)

/**
 * Empty funstion for props that takes in functions in test
 */
export const noop = () => {}
