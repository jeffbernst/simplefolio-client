import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import {reducer} from './reducer';

export default createStore(
  combineReducers({
    form: formReducer,
    general: reducer
  }),
  applyMiddleware(thunk)
);