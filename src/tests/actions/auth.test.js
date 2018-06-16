import {
  SET_AUTH_TOKEN,
  CLEAR_AUTH,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_ERROR
} from '../../actions/auth'
import {
  setAuthToken,
  clearAuth,
  authRequest,
  authSuccess,
  authError
} from '../../actions/auth'

describe('setAuthToken', () => {
  it('should return the action', () => {
    const action = setAuthToken()
    expect(action.type).toEqual(SET_AUTH_TOKEN)
  })
})

describe('clearAuth', () => {
  it('should return the action', () => {
    const action = clearAuth()
    expect(action.type).toEqual(CLEAR_AUTH)
  })
})

describe('authRequest', () => {
  it('should return the action', () => {
    const action = authRequest()
    expect(action.type).toEqual(AUTH_REQUEST)
  })
})

describe('authSuccess', () => {
  it('should return the action', () => {
    const currentUser = 'user'
    const action = authSuccess(currentUser)
    expect(action.type).toEqual(AUTH_SUCCESS)
    expect(action.currentUser).toEqual(currentUser)
  })
})

describe('authError', () => {
  it('should return the action', () => {
    const error = 'error'
    const action = authError(error)
    expect(action.type).toEqual(AUTH_ERROR)
    expect(action.error).toEqual(error)
  })
})

// TODO test storeAuthInfo, login, and refreshAuthToken