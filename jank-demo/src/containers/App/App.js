import React, { Component } from "react"
import { connect } from "react-redux"
import { increment, reset } from "../../actions/counter"
import { addFile, changeType } from "../../actions/files"
import FileList from "../FileList"
import Progress from "../Progress"
import "./App.css"

class App extends Component {
  startCounterInterval = () => {
    const timer = setInterval(() => {
      this.props.increment()
      if (this.props.counter === 100) {
        clearInterval(timer)
        setTimeout(() => {
          this.props.reset()
          setTimeout(() => {
            this.startCounterInterval()
          }, 100)
        }, 500)
      }
    }, 50)
  }

  componentDidMount() {
    for (let index = 0; index < 2000; index++) {
      const file = {
        id: index,
        name: `Janky-${index}`,
        type: index <= 1000 ? "react" : "redux"
      }
      this.props.addFile(file)
    }
    this.startCounterInterval()
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => this.props.changeType("react")}>React</button>
        <button onClick={() => this.props.changeType("redux")}>Redux</button>
        <FileList />
        <Progress />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  counter: state.counter.value,
  files: state.files
})

export default connect(
  mapStateToProps,
  {
    increment,
    reset,
    addFile,
    changeType
  }
)(App)
