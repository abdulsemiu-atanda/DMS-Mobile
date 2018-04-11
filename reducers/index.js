import {combineReducers} from 'redux'

import user from './userReducer'
import navReducer from './navReducer'
import document from './documentReducer'

const rootReducer = combineReducers({
  document,
  nav: navReducer,
  user
})

export default rootReducer
