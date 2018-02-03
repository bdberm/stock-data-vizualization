import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import {fetchQuote} from './actions/symbol_actions';


document.addEventListener("DOMContentLoaded",() => {
  window.fetchQuote = fetchQuote;
  const store = configureStore();
  window.store = store;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
