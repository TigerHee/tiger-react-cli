import { fork } from 'redux-saga/effects'
import { commonSaga } from './commonSaga'
import { watchTakeListAsync } from './takeLatest'

export default function* rootSaga() {
  yield fork(commonSaga)
  yield fork(watchTakeListAsync)
}