import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';


import configureStore from './config/configureStore';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

import './index.css';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

const Root = (store, history) => (
  <Provider store={store}>
    <Router history={history}>
      {routes(store)}
    </Router>
  </Provider>
);

ReactDOM.render(
  Root(store, history),
  document.getElementById('root')
);
