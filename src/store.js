import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import { reducer as reducerIndex } from './reducers/reducer'
import authReducer from './reducers/auth'
import protectedDataReducer from './reducers/protected-data'

export default createStore(
  combineReducers({
    form: formReducer,
    auth: authReducer,
    protectedData: protectedDataReducer,
    index: reducerIndex
  }),
  applyMiddleware(thunk)
)