import {asyncActions} from '../../util/asyncUtils'
import {DOCUMENTS} from '../../actionTypes/documentConstants'
import documentReducer from '../../reducers/documentReducer'

describe('Document Reducer', () => {
  it('returns default state for unknown action', () => {
    const reducer = documentReducer(undefined, {})

    expect(reducer.documents.size).toEqual(0)
    expect(reducer.documentLoading).toBeFalsy()
    expect(reducer.documentLoadingError).toBeFalsy()
    expect(reducer.error).toEqual({})
  })

  it('returns correct state when loading action is dispatched', () => {
    const reducer = documentReducer(undefined, asyncActions(DOCUMENTS).loading(true))

    expect(reducer.documentLoading).toBeTruthy()
    expect(reducer.documents.size).toEqual(0)
  })

  it('return correct state when error action is dispatched', () => {
    const error = {message: 'invalid request'}
    const reducer = documentReducer({}, asyncActions(DOCUMENTS).failure(true, error))

    expect(reducer.documentLoadingError).toBeTruthy()
    expect(reducer.error.message).toEqual(error.message)
  })

  it('returns correct state when success action is dispatched', () => {
    const data = [{title: 'Scooby Doo', content: 'Very happy.'}]
    const reducer = documentReducer({}, asyncActions(DOCUMENTS).success(data))

    expect(reducer.documents.size).toEqual(data.length)
    expect(reducer.documents.first().get('title')).toEqual(data[0].title)
  })
})
