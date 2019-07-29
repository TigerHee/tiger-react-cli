import { put, takeLatest } from 'redux-saga/effects'

export const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export function* takeListAsync(action) {
  try {
    yield delay(1000)
    yield put({
      type: 'UPDATE_STATE',
      payload: {
        testData: action.payload.testData
      }
    })
  } catch (error) {
    yield put({
      type: 'UPDATE_ERROE',
      error
    })
  }
}

// takeLatest
// 在发起到 Store 并且匹配 pattern 的每一个 action 上派生一个 saga。并自动取消之前所有已经启动但仍在执行中的 saga 任务。
export function* watchTakeListAsync(val) {
  yield takeLatest('UPDATE_STATE_TAkELATEST', takeListAsync)
}
