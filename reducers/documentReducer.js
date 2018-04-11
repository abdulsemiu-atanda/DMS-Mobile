import {List} from 'immutable'

import {
  DOCUMENTS_LOADING,
  DOCUMENTS_LOADING_ERROR,
  DOCUMENTS_LOADING_SUCCESS
} from '../actionTypes/documentConstants'
import {makeImmutable} from '../util/util'

const initialState = {
  documentLoading: false,
  documents: List([]),
  documentLoadingError: false,
  error: {}
}

export default documentReducer = (state=initialState, action) => {
  switch (action.type) {
    case DOCUMENTS_LOADING:
      return {...state, documentLoading: action.data}
    case DOCUMENTS_LOADING_ERROR:
      return {
          ...state,
          documentLoading: false,
          documentLoadingError: action.data.status,
          error: action.data.error
        }
    case DOCUMENTS_LOADING_SUCCESS:
      return {...state, documents: makeImmutable(action.data)}
    default:
      return state
  }
}