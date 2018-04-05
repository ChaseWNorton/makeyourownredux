// {
//   babel: {
//     presets: ["es2015", "react"]
//   }
// }
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  clickHandler(event) {
    let choice = event.target.innerHTML;
    switch (choice) {
      case "Increase": {
        store.dispatch(action);
      }
      case "Decrease": {
        store.dispatch(action2);
      }
    }
  }

  componentDidMount() {
    store.subscribe(() => this.forceUpdate())
  }

  render() {
    let state = store.getState();
    return (
      <div>
        <div>{state}</div>
        <button onClick={this.clickHandler.bind(this)}>Increase</button>
        <button onClick={this.clickHandler.bind(this)}>Decrease</button>
      </div>
    );
  }
}

export default App;

class storeCreator {
  constructor(reducer, initialState) {
    this.state = initialState;
    this.reducer = reducer;
    this.listeners = [];
  }

  getState() {
    return this.state;
  }

  subscribe(listener) {
    this.listeners.push(listener)
  }

  dispatch(action) {
    this.state = this.reducer(this.state, action);
    this.listeners.forEach(ele => ele());
  }
}

let reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return state + action.value;
    case "DECREASE":
      return state - action.value;
    default:
      return state;
  }
};

let action = {
  type: "INCREASE",
  value: 7
};
let action2 = {
  type: "DECREASE",
  value: 3
};
let store = new storeCreator(reducer, 5);

store.getState(); /*?*/
store.getState(); /*?*/
store.dispatch(action);
store.getState(); /*?*/
store.dispatch(action2);
store.dispatch(action2);
store.dispatch(action2);
store.getState(); /*?*/
store.dispatch(action);
store.dispatch(action);
store.getState(); /*?*/
