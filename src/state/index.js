import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

import * as reducers from './ducks';

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (initialState) => {
  const rootReducer = combineReducers(reducers);

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(
      logger,
      thunk,
    )),
  );
};

export default configureStore;