import AppNavigator from '../config/routes/routes'

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('AuthLoading'))

const navReducer = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}

export default navReducer
