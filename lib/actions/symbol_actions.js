export const RECEIVE_SYMBOLS = 'RECEIVE_SYMBOLS';

const receiveSymbols = (symbols) => (
  {
    type: RECEIVE_SYMBOLS,
    symbols
  }
);
