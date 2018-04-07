import sendRequest, {createRequest} from './requestUtil'
import {
  logInError,
  logInSuccess,
  logInLoading,
  signUpError,
  signUpLoading,
  signUpSuccess,
  refreshingToken,
  refreshingTokenError,
  tokenRefreshed
} from '../actions/userActions'
import {documentLoading, documentLoadingError, documentLoadingSuccess} from '../actions/documentActions'

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
    sendRequest('user/login', 'POST', data)
    .then(res => res.json())
    .then(res => {
      dispatch(logInSuccess(res))
      dispatch(logInLoading(false))
    })
    .catch(err => dispatch(logInError(err, true)))
  }
}

export const fetchDocRequest = token => {
  return dispatch => {
    dispatch(documentLoading(true))
    sendRequest('document', 'GET', null, token)
    .then(res => res.json())
    .then(res => {
      dispatch(documentLoadingSuccess(res))
      dispatch(documentLoading(false))
    }).catch(err => dispatch(documentLoadingError(true, err)))
  }
}

export const refreshToken = ({accessToken, token}) => {
  return dispatch => {
    dispatch(refreshingToken(true))
    sendRequest(`user/${accessToken}`, 'GET', null, token)
    .then(res => res.json())
    .then(res => {
      dispatch(tokenRefreshed(res))
      dispatch(refreshingToken(false))
    }).catch(err => dispatch(refreshingTokenError(true, err)))
  }
}
