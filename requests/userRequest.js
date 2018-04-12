import jwt from 'jwt-decode'

import sendRequest from './requestUtil'
import {asyncActions} from '../util/asyncUtils'
import {
  LOG_IN,
  SIGN_UP,
  TOKEN,
  USER_DOCUMENTS
} from '../actionTypes/userConstants'
import {DOCUMENTS} from '../actionTypes/documentConstants'

export const signUpRequest = data => {
  return dispatch => {
    dispatch(asyncActions(SIGN_UP).loading(true))
    sendRequest('user', 'POST', data)
    .then(res => res.json())
    .then(res => {
      dispatch(asyncActions(SIGN_UP).success(res))
      dispatch(asyncActions(SIGN_UP).loading(true))
    })
    .catch(err => dispatch(asyncActions(SIGN_UP).failure(true, err)))
  }
}

export const logInRequest = data => {
  return dispatch => {
    dispatch(asyncActions(LOG_IN).loading(true))
    sendRequest('user/login', 'POST', data)
    .then(res => res.json())
    .then(res => {
      dispatch(asyncActions(LOG_IN).success(res))
      dispatch(asyncActions(LOG_IN).loading(false))
    })
    .catch(err => dispatch(asyncActions(LOG_IN).failure(true, err)))
  }
}

export const fetchDocRequest = token => {
  return dispatch => {
    dispatch(asyncActions(DOCUMENTS).loading(true))
    sendRequest('document', 'GET', null, token)
    .then(res => res.json())
    .then(res => {
      dispatch(asyncActions(DOCUMENTS).success(res))
      dispatch(asyncActions(DOCUMENTS).loading(false))
    }).catch(err => dispatch(asyncActions(DOCUMENTS).failure(true, err)))
  }
}

export const refreshToken = ({accessToken, token}) => {
  return dispatch => {
    dispatch(asyncActions(TOKEN).loading(true))
    sendRequest(`user/${accessToken}`, 'GET', null, token)
    .then(res => res.json())
    .then(res => {
      dispatch(asyncActions(TOKEN).success(res))
      dispatch(asyncActions(TOKEN).loading(false))
    }).catch(err => dispatch(asyncActions(TOKEN).failure(true, err)))
  }
}

export const fetchUserDocRequest = token => {
  const decoded = jwt(token)

  return dispatch => {
    dispatch(asyncActions(USER_DOCUMENTS).loading(true))
    sendRequest(`user/${decoded.id}/document`, 'GET', null, token)
    .then(res => res.json())
    .then(res => {
      dispatch(asyncActions(USER_DOCUMENTS).success(res))
      dispatch(asyncActions(USER_DOCUMENTS).loading(false))
    }).catch(err => dispatch(asyncActions(USER_DOCUMENTS).failure(true, err)))
  }
}