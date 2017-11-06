// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched. Action key
// that carries API call info interpreted by this Redux middleware.

export const API_CALL = 'API_CALL'

/**
 * Middleware inspired by Redux Real World
 */
const ApiCallerMiddleware = ({dispatch, getState}) => next => action => {

  if (action.type === API_CALL) {

    const {
      types,
      callMethod,
      shouldCallAPI = () => true,
      payload = {}
    } = action

    // Validade the Types
    if (!Array.isArray(types) || types.length !== 3) {
      throw new Error('Expected an array of three action types.')
    }

    // Simples cache mechanism
    if (!shouldCallAPI(getState())) {
      return
    }

    const [requestType,
      successType,
      failureType] = types

    dispatch(Object.assign({}, {type: requestType}))

    return callMethod().then(response => dispatch(Object.assign({}, {
      response,
      payload,
      lastCall: new Date().getTime(),
      type: successType
    }))).catch(error => dispatch(Object.assign({}, {error, type: failureType})))
  } else {

    // Normal action: pass it on
    return next(action) 
  }

}

export default ApiCallerMiddleware
