import {RECEIVE_SYMBOLS} from '../actions/symbol_actions';
import merge from 'lodash/merge';

const _defaultState = {};

const SymbolsReducer = (oldState = _defaultState, action) => {
  switch (action.type) {
    case RECEIVE_SYMBOLS:
      
      break;
    default:
      return oldState;
  }
};

export default SymbolsReducer;
