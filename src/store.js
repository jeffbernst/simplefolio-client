import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import {reducer as reducerIndex} from './reducer';

export default createStore(
  combineReducers({
    form: formReducer,
    index: reducerIndex
  }),
  applyMiddleware(thunk)
);