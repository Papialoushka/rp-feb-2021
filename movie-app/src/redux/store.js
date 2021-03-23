import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';
import initialData from './data';

const data = {
  movies: initialData.movies,
};

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState = data) {
  return createStore(
    rootReducer,
    initialState,
    composedEnhancer(applyMiddleware(thunk)),
  )
};
