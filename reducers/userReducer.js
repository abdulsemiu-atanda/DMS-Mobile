import {fromJS} from 'immutable'

import {
  LOG_IN,
  SIGN_UP,
  USER_DOCUMENTS,
  TOKEN
} from '../actionTypes/userConstants'
import {makeImmutable} from '../util/util'
import {asyncActionNames} from '../util/asyncUtils'

const initialState = {
  accessToken: null,
  token: null,
  signingUp: false,
  loggingIn: false,
  error: {},
  signupError: false,
  loginError: false,
  refreshingToken: false,
  refreshingTokenError: false,
  tokenError: {},
  loadingDocuments: false,
  loadingDocumentsError: false,
  documentError: {},
  documents: fromJS([])
}

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case asyncActionNames(LOG_IN).failure:
      return {
        ...state,
        loggingIn: false,
        loginError: action.data.status,
        error: {logIn: action.data.error}
      }
    case asyncActionNames(LOG_IN).loading:
      return {...state, loggingIn: action.data}
    case asyncActionNames(LOG_IN).success:
      return {
        ...state,
        accessToken: action.data.refreshToken,
        loggingIn: false,
        signingUp: false,
        signupError: false,
        loginError: false,
        token: action.data.token,
        message: action.data.message
      }
    case asyncActionNames(SIGN_UP).failure:
      return {...state, signupError: action.data.status, error: {signUp: action.data.error}}
    case asyncActionNames(SIGN_UP).loading:
      return {...state, signingUp: action.data}
    case asyncActionNames(SIGN_UP).success:
      return {
        ...state,
        accessToken: action.data.refreshToken,
        loggingIn: false,
        signingUp: false,
        signupError: false,
        loginError: false,
        token: action.data.token,
        message: action.data.message
      }
    case asyncActionNames(TOKEN).loading:
      return {...state, refreshingToken: action.data}
    case asyncActionNames(TOKEN).failure:
      return {...state, refreshingTokenError: action.data.status, tokenError: action.data.error}
    case asyncActionNames(TOKEN).success:
      return {...state, token: action.data.token, accessToken: action.data.refreshToken}
    case asyncActionNames(USER_DOCUMENTS).loading:
      return {...state, loadingDocuments: action.data}
    case asyncActionNames(USER_DOCUMENTS).failure:
      return {
        ...state,
        loadingDocumentsError: action.data.status,
        documentError: action.data.error
      }
    case asyncActionNames(USER_DOCUMENTS).success:
      return {...state, documents: makeImmutable(action.data)}
    default:
      return state
  }
}

export default userReducer
