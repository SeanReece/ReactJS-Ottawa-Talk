This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Jank Demo

This is a simple demo of a "Janky" react app caused by unnecessary reconcilliations (renders) on every state change.

<p align="center">
  <img src="./janky-demo.png" alt="Jank Demo"/>
</p>

Every time the `counter` reducer changes, all `mapStateToProps` are called, and since `react-redux` does a shallowEqual on the result of `mapStateToProps`, if a `mapStateToProps` always returns a new reference then that component will ALWAYS re-render.

See [containers/FileList/index.js](./containers/FileList/index.js) for the cause/solution.
