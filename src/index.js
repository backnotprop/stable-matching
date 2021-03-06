import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import configureStore from './store';

import 'font-awesome/css/font-awesome.css';
import 'github-fork-ribbon-css/gh-fork-ribbon.css';
import './styles/index.css';

const store = configureStore({});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);