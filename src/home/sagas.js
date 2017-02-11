import { call, put, fork, takeEvery } from 'redux-saga/effects';

import Firebase from 'firebase';

export function* getSandwiches() {
  const ref = Firebase.database().ref('sandwiches');

  const data = yield call([ref, ref.once], 'value');

  yield put({ type: 'FETCH_SANDWICHES_RECEIVED', payload: data.val() });
}

export function* watchGetSandwiches() {
  yield takeEvery('FETCH_SANDWICHES', getSandwiches);
}

export default function* rootSaga() {
  yield [
    fork(watchGetSandwiches)
  ]
}
