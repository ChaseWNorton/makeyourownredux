//store can now handle a function that modifies the state (2BASICReducer)
class createStore {
  constructor(reducer, initialState) {
    this.state = initialState;
    this.reducer = reducer;
  }

  getState() {
    return this.state;
  }

  dispatch() {
    this.state = this.reducer(this.state);
  }
}

let reducer = (state) => {
  return state + 1
};

let store = new createStore(reducer, 3);
store.getState();/*?*/
store.dispatch();
store.getState();/*?*/
