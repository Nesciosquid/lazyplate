// Extremely simplistic reducing function.
// Ignores existing state, returns new string as new state.
const increaseNumber = (state) => (
  state + 1
);

const decreaseNumber = (state) => (
  state - 1
);

// reducer
export const storedNumber = (state = 0, action) => {
  switch (action.type) {
    case ('STORED_NUMBER_INCREASE'):
      return increaseNumber(state);
    case ('STORED_NUMBER_DECREASE'):
      return decreaseNumber(state);
    default:
      return state;
  }
};
