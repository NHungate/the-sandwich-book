import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../rootReducer';
import createSagaMiddleware from 'redux-saga';
import saga from '../sagas';

import Firebase from 'firebase';
import firebaseConfig from './configureFirebase';

Firebase.initializeApp(firebaseConfig);

export default function configureStore(initialState) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(sagaMiddleware),
    )
  );

  sagaMiddleware.run(saga);

  if (module.hot) {
    module.hot.accept('../rootReducer', () => {
      const nextRootReducer = require('../rootReducer').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
