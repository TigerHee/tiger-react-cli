import { put, call, take, select } from 'redux-saga/effects'

export const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export function* addItem1(value) {
  try {
    return yield call(delay, 1000)
  } catch (err) {
    yield put({type: 'ERROR'})
  }
}

export function* commonSaga(val) {
  while (true) {
    // 开始监听action UPDATE_STATE_SAGA
    let request = yield take('UPDATE_STATE_SAGA')
    // 模拟请求延时
    let response = yield call(addItem1, request)
    // 获取testData的旧值
    let oldVal = yield select(state => state.common.testData)
    console.log('oldVal === ', oldVal)
    console.log('newVal === ', request.payload.testData)
    yield put({
      type: 'UPDATE_STATE',
      payload: {
        testData: request.payload.testData
      }
    })
  }
}