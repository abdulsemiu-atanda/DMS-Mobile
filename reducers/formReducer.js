import {
  FULLNAME_VALIDATED,
  PASSWORD_MATCH,
  EMAIL_VALIDATED,
  USERNAME_VALIDATED
} from '../actionTypes/formConstants'

const initialState = {validEmail: false, passwordMatch: false, validFullname: false, validUsername: false}

export default formReducer = (state=initialState, action) => {
  switch (action.type) {
    case FULLNAME_VALIDATED:
      return {...state, validFullname: action.data}
    case USERNAME_VALIDATED:
      return {...state, validUsername: action.data}
    case EMAIL_VALIDATED:
      return {...state, validEmail: action.data}
    case PASSWORD_MATCH:
      return {...state, passwordMatch: action.data}
    default:
      return state
  }
}