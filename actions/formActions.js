import {
  FULLNAME_VALIDATED,
  PASSWORD_MATCH,
  EMAIL_VALIDATED,
  USERNAME_VALIDATED
} from '../actionTypes/formConstants'

export const emailCorrect = bool => ({
  type: EMAIL_VALIDATED,
  data: bool
})

export const usernameCorrect = bool => ({
  type: USERNAME_VALIDATED,
  data: bool
})

export const passwordMatch = bool => ({
  type: PASSWORD_MATCH,
  data: bool
})

export const fullnameCorrect = bool => ({
  type: FULLNAME_VALIDATED,
  data: bool
})

