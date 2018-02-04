import {connect} from 'react-redux';
import StockInfo from './stock_info';
import {fetchQuote} from '../../actions/symbol_actions';

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
    fetchQuote: ((symbol) => dispatch(fetchQuote(symbol)))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(StockInfo);
