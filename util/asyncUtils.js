import sendRequest from '../requests/requestUtil'

/**
 * Constructs async actions constants
 * @param {string} baseName
 * @returns {Object}
 */
export const asyncActionNames = baseName => ({
  failure: `${baseName}_FAILURE`,
  loading: `${baseName}_LOADING`,
  success: `${baseName}_SUCCESS`
})

/**
 * Constructs Redux async actions
 * @param {string} actionName
 * @returns {Object}
 */
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

/**
 * Dispatches Redux Actions
 * @async asyncRequest
 * @param {string} ACTION_NAME - The name of action to be dispatched
 * @param {string} endpoint - The endpoint to resource
 * @param {string} method - HTTP method
 * @param {Object} data - HTTP request body
 * @param {string} token - Authentication token for request
 * @returns {Function} - Function that dispatches Redux Actions
 */

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
