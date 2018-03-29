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

const initialState = {validEmail: false, passwordMatch: false, validFullname: false, validUsername: false}

export default formReducer = (state=initialState, action) => {
  switch (action.type) {
    case FULLNAME_CORRECT:
      return {...state, validFullname: action.data}
    case FULLNAME_ERROR:
      return {...state, validFullname: action.data}
    case USERNAME_CORRECT:
      return {...state, validUsername: action.data}
    case USERNAME_ERROR:
      return {...state, validUsername: action.data}
    case PASSWORD_MATCH:
      return {...state, passwordMatch: action.data}
    case PASSWORD_MATCH_ERROR:
      return {...state, passwordMatch: action.data}
    case EMAIL_CORRECT:
      return {...state, validEmail: action.data}
    case EMAIL_ERROR:
      return {...state, validEmail: action.data}
    default:
      return state
  }
}