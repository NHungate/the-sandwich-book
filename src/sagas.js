import { fork } from 'redux-saga/effects';
import homeSagas from './home/sagas';
import detailsSagas from './recipe-details/sagas';

export default function* rootSaga() {
  yield [
    fork(homeSagas),
    fork(detailsSagas)
  ];
}
