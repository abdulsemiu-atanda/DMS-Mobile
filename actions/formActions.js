import {
  FULLNAME_CORRECT,
  FULLNAME_ERROR,
  USERNAME_ERROR,
  USERNAME_CORRECT,
  EMAIL_ERROR,
  EMAIL_CORRECT,
  PASSWORD_MATCH_ERROR,
  PASSWORD_MATCH
} from '../actionTypes/formConstants'

export const emailError = bool => ({
  type: EMAIL_ERROR,
  data: bool
})

export const passwordMatchError = bool => ({
  type: PASSWORD_MATCH_ERROR,
  data: bool
})

export const usernameError = bool => ({
  type: USERNAME_ERROR,
  data: bool
})

export const fullnameError = bool => ({
  type: FULLNAME_ERROR,
  data: bool
})

export const emailCorrect = bool => ({
  type: EMAIL_CORRECT,
  data: bool
})

export const usernameCorrect = bool => ({
  type: USERNAME_CORRECT,
  data: bool
})

export const passwordMatch = bool => ({
  type: PASSWORD_MATCH,
  data: bool
})

export const fullnameCorrect = bool => ({
  type: FULLNAME_CORRECT,
  data: bool
})

