export const ADD_FILE = "ADD_FILE"
export const CHANGE_TYPE = "CHANGE_TYPE"

export const addFile = file => ({
  type: ADD_FILE,
  file
})

export const changeType = fileType => ({
  type: CHANGE_TYPE,
  fileType
})
