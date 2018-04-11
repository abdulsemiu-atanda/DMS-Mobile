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
  }),
})
