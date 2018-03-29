import {
  emailCorrect,
  emailError,
  fullnameCorrect,
  fullnameError,
  passwordMatch,
  passwordMatchError,
  usernameCorrect,
  usernameError
} from '../actions/formActions'

export const validateFields = data => {
  return dispatch => {
    Object.keys(data).forEach(field => {
      switch (field) {
        case 'email':
          return /^\S+@\S+$/g.test(data[field]) ? dispatch(emailCorrect(true)) : dispatch(emailError(true))
        case 'username':
          return data[field].trim() === '' ? dispatch(usernameError(true)) : dispatch(usernameCorrect(true))
        case 'password':
          return data.password === data.confirmPassword ? dispatch(passwordMatch(true)) : dispatch(passwordMatchError(true))
        case 'fullname':
          return data[field].trim() === '' ? dispatch(fullnameError(true)) : dispatch(fullnameCorrect(true))
        default:
          break
      }
    })
  }
}