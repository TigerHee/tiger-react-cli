import initSate from './initState'
const common = (state = initSate, action) => {
  console.log('common action === ', action)
  switch (action.type) {
    case 'UPDATE_STATE':
      return { ...state, ...action.payload }
    default:
      return state
  }
}

export default common