import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import {fetchSymbols} from './util/iex_api_util';

document.addEventListener("DOMContentLoaded",() => {
  window.fetchSymbols = fetchSymbols;

  const root = document.getElementById('root');
  ReactDOM.render(<Root />, root);
});
