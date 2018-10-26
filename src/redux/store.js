import { createStore } from 'redux'
import rootReducer from './reducers'
const store = createStore(rootReducer)
console.log('store === ', store)
export default store