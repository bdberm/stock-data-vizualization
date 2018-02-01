import * as IEXAPIUtil from '../util/iex_api_util';

export const RECEIVE_SYMBOLS = 'RECEIVE_SYMBOLS';

export const fetchSymbols = () => (dispatch) => (
  IEXAPIUtil.fetchSymbols().then(
    ((symbols) => dispatch(receiveSymbols(symbols)))  
  )
);

const receiveSymbols = (symbols) => (
  {
    type: RECEIVE_SYMBOLS,
    symbols
  }
);
