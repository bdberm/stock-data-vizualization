import * as IEXAPIUtil from '../util/iex_api_util';

export const RECEIVE_SYMBOLS = 'RECEIVE_SYMBOLS';
export const RECEIVE_QUOTE = 'RECEIVE_QUOTE';
export const RECEIVE_HISTORY = 'RECEIVE_HISTORY';

export const fetchSymbols = () => (dispatch) => (
  IEXAPIUtil.fetchSymbols().then(
    ((symbols) => dispatch(receiveSymbols(symbols)))
  )
);

export const fetchQuote = (symbol) => (dispatch) => (
  IEXAPIUtil.fetchQuote(symbol).then(
    ((quote) => dispatch(receiveQuote(quote)))
  )
);

export const fetchHistory = (symbol, timeStr="") => (dispatch) => (
  IEXAPIUtil.fetchHistory(symbol, timeStr).then(
    ((history) => dispatch(receiveHistory(symbol, history)))
  )
);


const receiveSymbols = (symbols) => (
  {
    type: RECEIVE_SYMBOLS,
    symbols
  }
);

const receiveQuote = (quote) => (
  {
    type: RECEIVE_QUOTE,
    quote
  }
);

const receiveHistory = (symbol, history) => (
  {
      type: RECEIVE_HISTORY,
      symbol,
      history
  }
);
