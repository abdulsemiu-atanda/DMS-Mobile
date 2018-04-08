import {StyleSheet, Dimensions, Platform} from 'react-native'

import colors from './colors'

const {width, height} = Dimensions.get('window')

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
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
    backgroundColor: colors.blue,
    height: 40,
    alignItems: 'center',
    marginTop: 20,
    padding: 7
  },
  buttonText: {
    color: colors.darkBlue,
    fontSize: 18
  },
  form: {
    padding: 30
  },
  input: {
    borderBottomColor: colors.grey,
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
    backgroundColor: colors.lightGreen,
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
    color: colors.white,
    textAlign: 'center'
  }
})

export const headerStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
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

export const emptyDocumentStyles = StyleSheet.create({
  button: {
    alignContent: 'center',
    alignSelf: 'center',
    backgroundColor: colors.blue,
    padding: 7,
    width: (width * 0.4)
  },
  buttonText: {
    color: colors.darkBlue,
    fontSize: 15,
    textAlign: 'center'
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  instructions: {
    fontFamily: 'Verdana',
    textAlign: 'center',
    marginBottom: 20
  }
})

export const documentListStyles = StyleSheet.create({
  container: {
    borderRadius: 5,
    width,
  },
  content: {
    backgroundColor: colors.white,
    height: (height * 0.2),
    padding: 10
  },
  contentText: {
    marginBottom: (height * 0.08)
  },
  collection: {
    borderBottomColor: colors.grey,
    borderBottomWidth: 1,
  },
  collectionView: {
    height: (height * 0.08),
    flexDirection: 'column',
    justifyContent: 'space-between',
    width,
    padding: 10
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width,
    padding: 10
  },
  headerHr: {
    width: (width * 0.8),
    marginBottom: 8
  },
  headerText: {
    fontSize: 12
  },
  hr: {
    borderBottomColor: colors.grey,
    borderBottomWidth: 1,
    marginBottom: 2
  },
  rootNode: {
    flex: 1,
    fontFamily: 'Verdana',
    padding: 7
  },
  title: {
    fontWeight: '700',
    fontSize: 15,
    marginBottom: 2
  },
  footer: {
    color: colors.grey,
    fontSize: 10
  }
})

export const homeStyles = StyleSheet.create({
  button: {
    backgroundColor: colors.blue,
    position: 'absolute',
    top: (height * 0.8),
    left: (width * 0.88),
    width: (width * 0.09),
    borderRadius: 20,
    justifyContent: 'center'
  },
  buttonIcon: {
    alignSelf: 'center'
  },
  container: {
    backgroundColor: colors.whitish,
    flex: 1
  }
})