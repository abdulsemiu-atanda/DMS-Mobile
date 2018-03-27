import {StyleSheet} from 'react-native'

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
    width: '100%',
    height: '52%',
    backgroundColor: '#01f0b3'
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
  }
})