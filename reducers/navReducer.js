import {createNavigationReducer} from 'react-navigation-redux-helpers'

import AppNavigator from '../config/routes/routes'

const navReducer = createNavigationReducer(AppNavigator)

export default navReducer
