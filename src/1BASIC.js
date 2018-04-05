//BASE EXAMPLE
class createStore {
  constructor(initialState) {
    this.state = initialState;
  }

  getState() {
    return this.state;
  }
}

let store = new createStore(0);
store.getState();/*?*/