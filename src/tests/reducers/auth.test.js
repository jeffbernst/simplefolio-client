import authReducer from '../../reducers/auth'

describe('auth reducer', () => {
  it('should set the initial state when nothing is passed in', () => {
    const state = authReducer(undefined, {type: '__UNKNOWN'})
    expect(state).toEqual({
      authToken: null,
      currentUser: null,
      loading: false,
      error: null
    })
  })
})