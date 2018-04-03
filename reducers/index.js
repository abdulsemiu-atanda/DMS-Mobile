import {combineReducers} from 'redux'

import user from './userReducer'
import form from './formReducer'
import navReducer from './navReducer'
import document from './documentReducer'

const rootReducer = combineReducers({
  document,
  form,
  nav: navReducer,
  user
})

export default rootReducer
