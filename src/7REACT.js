//Bring it into React

// {
//   babel: {
//     presets: ["es2015", "react"]
//   }
// }
import React, { Component } from "react";
import "./App.css";

class App extends Component {
  clickHandler(event) {
    let choice = event.target.innerHTML;
    switch(choice) {
      case 'Increase':
        store.dispatch({increaseAction});
        break;
      case 'Decrease':
        store.dispatch({decreaseAction});
        break;
      default: break;
    }
  }


  render() {
    let props = store.getState();
    return (
      <div>
        <div>{props}</div>
        <button onClick={this.clickHandler.bind(this)}>Increase</button>
        <button onClick={this.clickHandler.bind(this)}>Decrease</button>
      </div>
    );
  }
}

export default App;

class createStore {
  constructor(reducer, initialState) {
    this.state = initialState;
    this.reducer = reducer;
  }

  getState() {
    return this.state;
  }

  dispatch(action) {
    this.state = this.reducer(this.state, action);
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

let increaseAction = {
  type: "INCREASE",
  value: 7
};
let decreaseAction = {
  type: "DECREASE",
  value: 3
};

let store = new createStore(reducer, 6);
store.getState()/*?*/