// {
//   babel: {
//     presets: ["es2015", "react"]
//   }
// }
//Add Life cycle and rendering

import React, { Component } from "react";
import { createStore } from 'redux';
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
let store = new createStore(reducer, 5);


