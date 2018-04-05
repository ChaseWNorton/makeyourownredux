//All put together
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
  switch (action) {
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state - 1;
    default:
      return state;
  }
};

let actionUp = 'INCREASE';
let actionDown = 'DECREASE';


let store = new createStore(reducer, 0);
store.getState();/*?*/
store.dispatch(actionUp)
store.getState()/*?*/
store.dispatch(actionDown)
store.getState()/*?*/


