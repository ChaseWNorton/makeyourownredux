//Add Listeners to store
class createStore {
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