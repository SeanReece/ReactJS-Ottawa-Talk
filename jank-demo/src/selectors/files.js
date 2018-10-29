import { createSelector } from "reselect"

const getFiles = state => state.files

export const getFilteredFiles = createSelector([getFiles], files => {
  console.log("SELECTOR CALLED")
  return files.list.filter(file => file.type === files.type)
})

export const getEvenFiles = createSelector([getFilteredFiles], files => {
  return files.list.filter(file => file.id % 2 === 0)
})

export const getOddFiles = createSelector([getFilteredFiles], files => {
  return files.list.filter(file => file.id % 2 === 1)
})
