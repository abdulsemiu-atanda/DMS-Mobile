import {
  LOG_IN_ERROR,
  LOG_IN_LOADING,
  LOG_IN_SUCCESS,
  SIGN_UP_LOADING,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
  REFRESHING_TOKEN,
  REFRESHING_TOKEN_ERROR,
  TOKEN_REFRESHED,
  LOADING_USER_DOCUMENTS,
  LOADING_USER_DOCUMENTS_ERROR,
  USER_DOCUMENTS
} from '../actionTypes/userConstants'

export const signUpLoading = bool => ({
  type: SIGN_UP_LOADING,
  data: bool
})

export const signUpSuccess = data => ({
  type: SIGN_UP_SUCCESS,
  data
})

export const signUpError = (error, bool) => ({
  type: SIGN_UP_ERROR,
  data: {error, status: bool}
})

export const logInLoading = bool => ({
  type: LOG_IN_LOADING,
  data: bool
})

export const logInSuccess = data => ({
  type: LOG_IN_SUCCESS,
  data
})

export const logInError = (error, bool) => ({
  type: LOG_IN_ERROR,
  data: {error, status: bool}
})

export const refreshingToken = bool => ({
  type: REFRESHING_TOKEN,
  data: bool
})

export const refreshingTokenError = (bool, error) => ({
  type: REFRESHING_TOKEN_ERROR,
  data: {error, status: bool}
})

export const tokenRefreshed = data => ({
  type: TOKEN_REFRESHED,
  data
})

export const loadingUserDocuments = bool => ({
  type: LOADING_USER_DOCUMENTS,
  data: bool
})

export const loadingUserDocumentsError = (bool, error) => ({
  type: LOADING_USER_DOCUMENTS_ERROR,
  data: {error, status: bool}
})

export const userDocuments = data => ({
  type: USER_DOCUMENTS,
  data
})