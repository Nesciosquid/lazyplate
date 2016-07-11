import ReactDOM from 'react-dom';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App.jsx';
import AppReducer from './reducers/index.js';

const store = createStore(AppReducer);

const updateReact = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('reactContainer')
  );
};

updateReact();
