// Extremely simplistic reducing function.
// Ignores existing state, returns new string as new state.
const changeText = (state, newText = 'Default Text') => (
  newText
);

// reducer
export const storedText = (state = 'Enter some text!', action) => {
  switch (action.type) {
    case ('STORED_TEXT_CHANGE'):
      return changeText(state, action.text);
    default:
      return state;
  }
};
