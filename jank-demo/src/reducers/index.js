import { combineReducers } from "redux"
import counter from "./counter"
import files from "./files"

const rootReducer = combineReducers({
  counter,
  files
})

export default rootReducer
