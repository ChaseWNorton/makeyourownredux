//Improvement on actions and 2BASICReducer
let action = {
  type: "INCREASE",
  value: 7
};
let action2 = {
  type: "DECREASE",
  value: 3
};

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

