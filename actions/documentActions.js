import {
  DOCUMENTS_LOADING,
  DOCUMENTS_LOADING_ERROR,
  DOCUMENTS_LOADING_SUCCESS
} from '../actionTypes/documentConstants'

export const documentLoading = bool => ({
  type: DOCUMENTS_LOADING,
  data: bool
})

export const documentLoadingError = (bool, error) => ({
  type: DOCUMENTS_LOADING_ERROR,
  data: {error, status: bool}
})

export const documentLoadingSuccess = data => ({
  type: DOCUMENTS_LOADING_SUCCESS,
  data
})
