import {StyleSheet, Dimensions, Platform} from 'react-native'

const {width, height} = Dimensions.get('window')

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
})

export const loginStyles = StyleSheet.create({
  button: {
    backgroundColor: '#0983ff',
    height: 40,
    alignItems: 'center',
    marginTop: 20,
    padding: 7
  },
  buttonText: {
    color: '#aacfff',
    fontSize: 18
  },
  form: {
    padding: 30
  },
  input: {
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 10
  },
  label: {
    color: '#96a1ae',
    fontSize: 10
  },
  logoContainer: {
    flex: 3,
    backgroundColor: '#01f0b3',
    justifyContent: 'center'
  },
  loginContainer: {
    backfaceVisibility: 'hidden',
    flex: 1
  },
  error: {
    color: 'red',
    marginTop: 10
  },
  sigupContainer: {
    position: "absolute",
    width: '100%',
    top: 0
  },
  closer: {
    padding: 30
  },
  headerText: {
    alignSelf: 'center',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20
  },
  infoContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 30
  },
  infoText: {
    color: '#96a1ae',
    fontSize: 12,
    fontWeight: '600',
    marginRight: 5
  },
  signUpText: {
    fontSize: 12,
    fontWeight: '700'
  },
  title: {
    color: '#f7f7f7',
    fontSize: 25,
    fontWeight: '700',
    textAlign: 'center'
  },
  icon: {
    textAlign: 'center'
  },
  phrase: {
    fontSize: 15,
    color: '#f7f7f7',
    textAlign: 'center'
  }
})

export const headerStyles = StyleSheet.create({
  container: {
    backgroundColor: '#ffe4e1',
    height: (height * 0.07),
    flexDirection: 'row',
    width,
    justifyContent: 'space-between'
  },
  iconContainer: {
    flexDirection: 'row'
  },
  icon: {
    marginTop: 15,
    marginRight: 15
  },
  title: {
    fontWeight: '600',
    marginTop: 20,
    marginLeft: 20
  }
})