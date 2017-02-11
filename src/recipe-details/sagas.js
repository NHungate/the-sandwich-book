import { call, put, fork, takeEvery } from 'redux-saga/effects';
import { FETCH_SANDWICH, FETCH_SANDWICH_RECEIVED } from './actions';

import Firebase from 'firebase';

export function* getSandwich(action) {
  const id = action.payload;
  const ref = Firebase.database().ref(`sandwiches/${id}`);

  const data = yield call([ref, ref.once], 'value');

  yield put({ type: FETCH_SANDWICH_RECEIVED, payload: data.val() })
}

export function* watchGetSandwich() {
  yield takeEvery(FETCH_SANDWICH, getSandwich)
}

export default function* rootSaga() {
  yield [
    fork(watchGetSandwich)
  ]
}
