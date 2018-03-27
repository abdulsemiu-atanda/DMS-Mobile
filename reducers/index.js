import {combineReducers} from 'redux'

import user from './userReducer'
import navReducer from './navReducer'

const rootReducer = combineReducers({
  nav: navReducer,
  user
})

export default rootReducer
