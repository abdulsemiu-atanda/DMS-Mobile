import {combineReducers} from 'redux'

import user from './userReducer'
import form from './formReducer'
import navReducer from './navReducer'

const rootReducer = combineReducers({
  form,
  nav: navReducer,
  user
})

export default rootReducer
