import React from 'react';
import ReactDOM from 'react-dom';

import { Router, browserHistory } from 'react-router';
import routes from './routes';

import configureStore from './config/configureStore';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import './index.css';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

const Root = (store, history) => (
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>
);

ReactDOM.render(
  Root(store, history),
  document.getElementById('root')
);
