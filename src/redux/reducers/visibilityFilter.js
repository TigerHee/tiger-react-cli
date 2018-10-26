import initSate from './initState'
const visibilityFilter = (state = initSate.filter, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter