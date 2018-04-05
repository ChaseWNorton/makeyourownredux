//Need a way to handle different actions

let actionUp = 'INCREASE';
let actionDown = 'DECREASE';

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



