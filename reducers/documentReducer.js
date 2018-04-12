import {fromJS} from 'immutable'

import {DOCUMENTS} from '../actionTypes/documentConstants'
import {makeImmutable} from '../util/util'
import {asyncActionNames} from '../util/asyncUtils'

const initialState = {
  documentLoading: false,
  documents: fromJS([]),
  documentLoadingError: false,
  error: {}
}

const documentReducer = (state = initialState, action) => {
  switch (action.type) {
    case asyncActionNames(DOCUMENTS).loading:
      return {...state, documentLoading: action.data}
    case asyncActionNames(DOCUMENTS).failure:
      return {
        ...state,
        documentLoading: false,
        documentLoadingError: action.data.status,
        error: action.data.error
      }
    case asyncActionNames(DOCUMENTS).success:
      return {...state, documents: makeImmutable(action.data)}
    default:
      return state
  }
}

export default documentReducer
