import React, { Component } from "react"
import "./File.css"
import react from "./logo.svg"
import redux from "./redux.svg"

let counter = 0

class File extends Component {
  render() {
    const isReact = this.props.type === "react"
    return (
      <div className="file">
        <span>{this.props.fileName}</span>
        {isReact && <img src={react} className="file-logo" alt="logo" />}
        {!isReact && <img src={redux} className="file-logo" alt="logo" />}
        <span>Render called: {counter++}</span>
      </div>
    )
  }
}

export default File
