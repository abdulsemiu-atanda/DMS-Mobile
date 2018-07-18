import {AsyncStorage} from 'react-native'
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
 * Empty function for props that takes in functions in test
 */
export const noop = () => {}

/**
 * Persits user by setting auth token to AsyncStorage
 * @param {Object} nextProps
 * @param {Object} prevState
 * @returns {(void|Object)}
 */

export const persistUser = (nextProps, prevState) => {
  if (!nextProps.user.logingIn && !prevState.navigationComplete && nextProps.user.token) {
    const tokenObject = {token: nextProps.user.token, accessToken: nextProps.user.accessToken}

    AsyncStorage.setItem('token', JSON.stringify(tokenObject)).then(() => {
      nextProps.goToHome()
    }).catch(err => console.warn(err))
    return {
      navigationComplete: true
    }
  }
  return null
}
