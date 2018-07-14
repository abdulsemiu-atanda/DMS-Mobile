import {
  USER_DOCUMENTS,
  SIGN_UP,
  LOG_IN,
  TOKEN
} from '../../actionTypes/userConstants'
import {asyncActions} from '../../util/asyncUtils'
import userReducer from '../../reducers/userReducer'

const data = {
  refreshToken: 'gjhgyttikwi87879',
  token: 'bkhuyq98087o68eo79pq8eobe',
  message: 'login successful'
}

describe('User Reducer', () => {
  it('returns default state for unknow action', () => {
    const reducer = userReducer(undefined, {})

    expect(reducer.accessToken).toBeNull()
    expect(reducer.token).toBeNull()
    expect(reducer.documents.size).toEqual(0)
    expect(reducer.documentError).toEqual({})
    expect(reducer.error).toEqual({})
    expect(reducer.tokenError).toEqual({})
    expect(reducer.signingUp).toBeFalsy()
    expect(reducer.signupError).toBeFalsy()
    expect(reducer.loggingIn).toBeFalsy()
    expect(reducer.loginError).toBeFalsy()
    expect(reducer.loadingDocuments).toBeFalsy()
    expect(reducer.loadingDocumentsError).toBeFalsy()
    expect(reducer.refreshingToken).toBeFalsy()
    expect(reducer.refreshingTokenError).toBeFalsy()
  })

  it('returns correct state when login failure is dispatched', () => {
    const error = {message: 'unprocessable'}
    const reducer = userReducer(undefined, asyncActions(LOG_IN).failure(true, error))

    expect(reducer.loggingIn).toBeFalsy()
    expect(reducer.loginError).toBeTruthy()
    expect(reducer.error.logIn.message).toEqual(error.message)
  })

  it('returns correct state when login loading action is dispatched', () => {
    const reducer = userReducer(undefined, asyncActions(LOG_IN).loading(true))

    expect(reducer.loggingIn).toBeTruthy()
  })

  it('returns correct state when successful login is dispatched', () => {
    const reducer = userReducer(undefined, asyncActions(LOG_IN).success(data))

    expect(reducer.loggingIn).toBeFalsy()
    expect(reducer.signingUp).toBeFalsy()
    expect(reducer.accessToken).toEqual(data.refreshToken)
    expect(reducer.token).toEqual(data.token)
    expect(reducer.message).toEqual(data.message)
  })

  it('returns correct state when signup failure action is dispatched', () => {
    const error = {message: 'username must be unique'}
    const reducer = userReducer(undefined, asyncActions(SIGN_UP).failure(true, error))

    expect(reducer.signupError).toBeTruthy()
    expect(reducer.error.signUp.message).toEqual(error.message)
  })

  it('returns correct state when signup loading action is dispatched', () => {
    const reducer = userReducer(undefined, asyncActions(SIGN_UP).loading(true))

    expect(reducer.signingUp).toBeTruthy()
  })

  it('returns correct state when successful signup is dispatched', () => {
    const reducer = userReducer(undefined, asyncActions(SIGN_UP).success(data))

    expect(reducer.loggingIn).toBeFalsy()
    expect(reducer.signingUp).toBeFalsy()
    expect(reducer.accessToken).toEqual(data.refreshToken)
    expect(reducer.token).toEqual(data.token)
    expect(reducer.message).toEqual(data.message)
  })

  it('returns correct state when token loading action is dispatched', () => {
    const reducer = userReducer(undefined, asyncActions(TOKEN).loading(true))

    expect(reducer.refreshingToken).toBeTruthy()
  })

  it('returns correct state when token failure action is dispatched', () => {
    const error = {message: 'server error'}
    const reducer = userReducer(undefined, asyncActions(TOKEN).failure(true, error))

    expect(reducer.refreshingTokenError).toBeTruthy()
    expect(reducer.tokenError.message).toEqual(error.message)
  })

  it('returns correct state when successful token refresh is dispatched', () => {
    const reducer = userReducer(undefined, asyncActions(TOKEN).success(data))

    expect(reducer.accessToken).toEqual(data.refreshToken)
    expect(reducer.token).toEqual(data.token)
  })

  it('returns correct state when user documents is loading', () => {
    const reducer = userReducer(undefined, asyncActions(USER_DOCUMENTS).loading(true))

    expect(reducer.loadingDocuments).toBeTruthy()
  })

  it('returns correct state when loading user documents fails', () => {
    const error = {message: 'not found'}
    const reducer = userReducer(undefined, asyncActions(USER_DOCUMENTS).failure(true, error))

    expect(reducer.loadingDocumentsError).toBeTruthy()
    expect(reducer.documentError.message).toEqual(error.message)
  })

  it('returns correct state when user documents are successfully fetched', () => {
    const documents = [{title: 'RN', content: 'RN apps are actual native apps'}]
    const reducer = userReducer(undefined, asyncActions(USER_DOCUMENTS).success(documents))

    expect(reducer.documents.size).toEqual(documents.length)
    expect(reducer.documents.first().get('title')).toEqual(documents[0].title)
  })
})
