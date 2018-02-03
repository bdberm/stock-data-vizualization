import {RECEIVE_SYMBOLS, RECEIVE_QUOTE} from '../actions/symbol_actions';
import {convertSymbolsToObject} from '../util/conversions';
import merge from 'lodash/merge';

const _defaultState = {};

const SymbolsReducer = (oldState = _defaultState, action) => {
  switch (action.type) {
    case RECEIVE_SYMBOLS:
      return convertSymbolsToObject(action.symbols);
    case RECEIVE_QUOTE:
      return merge({}, oldState, {[action.quote.symbol]: action.quote});
    default:
      return oldState;
  }
};

export default SymbolsReducer;
