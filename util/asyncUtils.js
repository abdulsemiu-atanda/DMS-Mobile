import sendRequest from '../requests/requestUtil'

export const asyncActionNames = baseName => ({
  failure: `${baseName}_FAILURE`,
  loading: `${baseName}_LOADING`,
  success: `${baseName}_SUCCESS`
})

export const asyncActions = (actionName) => ({
  loading: bool => ({
    type: asyncActionNames(actionName).loading,
    data: bool
  }),
  failure: (bool, error) => ({
    type: asyncActionNames(actionName).failure,
    data: {error, status: bool}
  }),
  success: data => ({
    type: asyncActionNames(actionName).success,
    data
  })
})

export const asyncRequest = (ACTION_NAME, endpoint, method, data, token) => dispatch => {
  dispatch(asyncActions(ACTION_NAME).loading(true))
  sendRequest(endpoint, method, data, token)
    .then(res => res.json())
    .then(res => {
      dispatch(asyncActions(ACTION_NAME).success(res))
      dispatch(asyncActions(ACTION_NAME).loading(false))
    })
    .catch(err => dispatch(asyncActions(ACTION_NAME).failure(true, err)))
}
