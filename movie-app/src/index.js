import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import configureStore from './redux/store';
import { fetchMovies } from './redux/reducers';

import './index.css';
import App from './components/App';

const store = configureStore();

store.dispatch(fetchMovies({sortBy: 'release_date', sortOrder: 'desc'}));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
