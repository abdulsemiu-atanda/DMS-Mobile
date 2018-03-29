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