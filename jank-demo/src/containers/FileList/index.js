import React, { Component } from "react"
import { connect } from "react-redux"
import File from "../../components/File"
import { getFilteredFiles } from "../../selectors/files"
import "./FileList.css"

class FileList extends Component {
  render() {
    const fileComponents = this.props.files.map(file => (
      <File key={file.id} type={file.type} fileName={file.name} />
    ))
    return <div className="file-list">{fileComponents}</div>
  }
}

const mapStateToProps = state => ({
  files: state.files.list.filter(file => file.type === state.files.type) // filter returns a new array so this causes the File component to re-render EVERY time the state changes
  // files: getFilteredFiles(state),                                     // Using a memoized selector will ensure that the same reference is always returned unless something *actually* changes.
  // stuff: {}                                                           // Just returning a new object from mapStateToProps will cause File component to re-render EVERY time the state changes
})

export default connect(
  mapStateToProps,
  {}
)(FileList)
