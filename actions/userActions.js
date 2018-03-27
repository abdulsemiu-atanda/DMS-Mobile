import {
  LOG_IN_ERROR,
  LOG_IN_LOADING,
  LOG_IN_SUCCESS,
  SIGN_UP_LOADING,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR
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