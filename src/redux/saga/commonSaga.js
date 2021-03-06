import { put, call, take, select } from 'redux-saga/effects'

export const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export function* fakeRequest(value) {
  try {
    return yield call(delay, 1000)
  } catch (err) {
    yield put({type: 'ERROR'})
  }
}

export function* commonSaga(val) {
  /** 我们运行了一个无限循环的 while(true)。记住这是一个 Generator 函数，它不具备 从运行至完成 的行为（run-to-completion behavior）。
   * Generator 将在每次迭代阻塞以等待 action 发起。 */
  while (true) {
    // 开始监听action UPDATE_STATE_SAGA
    let request = yield take('UPDATE_STATE_SAGA')
    // 模拟请求延时
    // eslint-disable-next-line no-unused-vars
    let response = yield call(fakeRequest, request)
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
