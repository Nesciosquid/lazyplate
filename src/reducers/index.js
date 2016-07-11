import { combineReducers } from 'redux';
import { storedText } from './storedText.js';
import { storedNumber } from './storedNumber.js';

export default combineReducers({
  storedText,
  storedNumber,
});
