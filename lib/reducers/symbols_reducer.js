import {RECEIVE_SYMBOLS} from '../actions/symbol_actions';
import {convertSymbolsToObject} from '../util/conversions';
import merge from 'lodash/merge';

const _defaultState = {};

const SymbolsReducer = (oldState = _defaultState, action) => {
  switch (action.type) {
    case RECEIVE_SYMBOLS:
      return convertSymbolsToObject(action.symbols);
    default:
      return oldState;
  }
};

export default SymbolsReducer;
