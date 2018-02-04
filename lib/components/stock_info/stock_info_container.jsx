import {connect} from 'react-redux';
import StockInfo from './stock_info';
import {fetchQuote, fetchHistory} from '../../actions/symbol_actions';

const mapStateToProps = (state, ownProps) => {
  const stateStock = state.symbols[ownProps.match.params.symbol];
  const stock = stateStock || {symbol: "", name: "", latestPrice: "",
    latestVolume: "", changePercent: ""};

  if (!stock.latestPrice) {
    [stock.latestPrice, stock.latestVolume, stock.changePercent] =
    ["","",""];
  }

  return {
    stock
  };

};

const mapDispatchToProps = (dispatch) => (
  {
    fetchQuote: ((symbol) => dispatch(fetchQuote(symbol))),
    fetchHistory: ((symbol, timeStr="1m") => dispatch(fetchHistory(symbol, timeStr)))  
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(StockInfo);
