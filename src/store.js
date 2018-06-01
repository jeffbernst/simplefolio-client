import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import { reducer as reducerIndex } from './reducers/reducer'
import {loadAuthToken} from './local-storage';
import authReducer from './reducers/auth'
import protectedDataReducer from './reducers/protected-data'
import {setAuthToken, refreshAuthToken} from './actions/auth';

const store = createStore(
  combineReducers({
    form: formReducer,
    auth: authReducer,
    protectedData: protectedDataReducer,
    index: reducerIndex
  }),
  applyMiddleware(thunk)
)

const authToken = loadAuthToken();
if (authToken) {
  const token = authToken;
  store.dispatch(setAuthToken(token));
  store.dispatch(refreshAuthToken());
}

export default store;