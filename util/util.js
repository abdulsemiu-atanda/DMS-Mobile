import jwt from 'jwt-decode'
import {
  emailCorrect,
  fullnameCorrect,
  passwordMatch,
  usernameCorrect,
} from '../actions/formActions'

export const validateFields = data => {
  return dispatch => {
    Object.keys(data).forEach(field => {
      switch (field) {
        case 'email':
          return  dispatch(emailCorrect(/^\S+@\S+$/g.test(data[field])))
        case 'username':
          return dispatch(usernameCorrect(data[field].trim() !== ''))
        case 'password':
          return  dispatch(passwordMatch(data.password === data.confirmPassword))
        case 'fullname':
          return dispatch(fullnameCorrect(data[field].trim() !== ''))
        default:
          break
      }
    })
  }
}

export const isTokenExpired = token => {
  const decoded = jwt(token)

  return decoded.exp < Date.now() / 1000
}

export const ucFirst = string => `${string.charAt(0).toUpperCase()}${string.slice(1)}`
