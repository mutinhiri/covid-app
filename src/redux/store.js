import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import dataReducer from './data';
import covidReducer from './covid';

const reducer = combineReducers({
  data: dataReducer,
  covid: covidReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
