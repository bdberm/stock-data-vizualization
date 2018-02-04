import {RECEIVE_SYMBOLS, RECEIVE_QUOTE, RECEIVE_HISTORY} from '../actions/symbol_actions';
import {convertSymbolsToObject} from '../util/conversions';
import merge from 'lodash/merge';

const _defaultState = {};

const SymbolsReducer = (oldState = _defaultState, action) => {
  switch (action.type) {
    case RECEIVE_SYMBOLS:
      const newRecipes = convertSymbolsToObject(action.symbols);
      return merge({}, oldState, newRecipes);
    case RECEIVE_QUOTE:
      return merge({}, oldState, {[action.quote.symbol]: action.quote});
    case RECEIVE_HISTORY:
      // return merge({}, oldState, {[action.symbol]: {history: action.history}});
      const newState = oldState;
      if (newState[action.symbol]) {
        newState[action.symbol].history = action.history;
      } else {
        newState[action.symbol] = {history: action.history};
      }
      return newState;
    default:
      return oldState;
  }
};

export default SymbolsReducer;
