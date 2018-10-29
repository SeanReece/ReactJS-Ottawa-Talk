import { ADD_FILE, CHANGE_TYPE } from "../actions/files"

const initialState = {
  type: "react",
  list: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TYPE:
      return { ...state, type: action.fileType }
    case ADD_FILE:
      return { ...state, list: [...state.list, action.file] }
    default:
      return state
  }
}
