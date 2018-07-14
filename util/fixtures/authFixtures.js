import {Animated} from 'react-native'

import {noop} from '../util'

const animatedValue = new Animated.Value(0)

const authScreenProps = screen => ({
  asyncRequest: noop,
  frontOpacity: animatedValue.interpolate({
    inputRange: [89, 90],
    outputRange: [1, 0]
  }),
  frontInterpolate: animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg']
  }),
  flipCard: noop,
  goToHome: noop,
  user: screen === 'signup' ?
    {
      signingUp: false,
      message: ''
    } :
    {
      loggingIn: false,
      message: ''
    }
})

export const authLoadingProps = screen => ({
  ...authScreenProps(screen),
  user: screen === 'signup' ?
    {signingUp: true, message: ''} :
    {loggingIn: true, message: ''}
})

export default authScreenProps
