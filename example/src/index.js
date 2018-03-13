import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

const createRand = () => (Math.random() * 100).toFixed(2);

const reducer = (state = {}, action) => {
  if (action.type === 'TICK') {
    return { ...state, value: createRand() }
  }
  return state;
};

const store = createStore(reducer);

const HOW_OFTEN = 200;

const tickId = window.setInterval(
  () => store.dispatch({ type: 'TICK' }),
  HOW_OFTEN
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
