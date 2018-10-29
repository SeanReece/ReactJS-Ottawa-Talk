import React, { Component } from "react"
import { connect } from "react-redux"
import { Progress as AntProgress } from "antd"
import "./Progress.css"
import "antd/dist/antd.css"

class Progress extends Component {
  render() {
    const percent = this.props.counter
    return (
      <div className="upload-progress">
        <div className="upload-progress__content">
          <div className="upload-progress__content__message">
            Uploading... ({percent}
            %)
          </div>
        </div>
        <AntProgress
          className="upload-progress__bar"
          percent={percent}
          showInfo={false}
          strokeLinecap="square"
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  counter: state.counter.value
})

export default connect(
  mapStateToProps,
  {}
)(Progress)
