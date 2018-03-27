import sendRequest from './requestUtil'
import {
  logInError,
  logInSuccess,
  logInLoading,
  signUpError,
  signUpLoading,
  signUpSuccess
} from '../actions/userActions'

export const signUpRequest = data => {
  return dispatch => {
    dispatch(signUpLoading(true))
    sendRequest('user', 'POST', data)
    .then(res => res.json())
    .then(res => {
      dispatch(signUpSuccess(res))
      dispatch(signUpLoading(false))
    })
    .catch(err => dispatch(signUpError(err, true)))
  }
}

export const logInRequest = data => {
  return dispatch => {
    dispatch(logInLoading(true))
    sendRequest('user', 'POST', data)
    .then(res => res.json())
    .then(res => {
      dispatch(logInSuccess(res))
      dispatch(logInLoading(false))
    })
    .catch(err => dispatch(logInError(err, true)))
  }
}

