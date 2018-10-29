import { INCREMENT, RESET } from "../actions/counter"

const initialState = {
  value: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: ++state.value }
    case RESET:
      return { ...state, value: 0 }
    default:
      return state
  }
}
