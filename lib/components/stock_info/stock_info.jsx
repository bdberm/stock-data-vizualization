import React from 'react';
import {convertToPercent} from '../../util/conversions';
import HistoryChart from './history_chart';
import {fetchHistory} from '../../actions/symbol_actions';

class StockInfo extends React.Component {

  componentDidMount() {
    this.props.fetchQuote(this.props.match.params.symbol);
  }

  componentWillReceiveProps(newProps) {
    const newSym = newProps.match.params.symbol;

    if (newSym !== this.props.match.params.symbol) {
      this.props.fetchQuote(newSym);
    }
  }

  render() {
    const {stock, fetchHistory} = this.props;

    const percentChange = convertToPercent(stock.changePercent);

    const historyChart = stock.history ? <HistoryChart history={stock.history}  /> : null;

    let changeStr;
    if (percentChange < 0 ) {

      changeStr = "(" + percentChange.toString() + ")";
    } else {
      changeStr = percentChange.toString();
    }

    return (
      <section className="stock-info-container">
        <h1>{stock.symbol}: {stock.name}</h1>
        <ul className="basic-stock-info">
          <div className = "stock-info-item">
            <h2>Latest Price</h2>
            <h3>${parseFloat(stock.latestPrice).toLocaleString()}</h3>
            <h3>{changeStr}%</h3>
          </div>
          <div className = "stock-info-item">
            <h2>Latest Volume</h2>
            <h3>{stock.latestVolume.toLocaleString()}</h3>
          </div>
        </ul>

        <div className="get-history-container">
          <h2>Price History</h2>
          <div className="history-buttons"></div>
          <button className="history-button" onClick={() => fetchHistory(stock.symbol)}>3 Weeks</button>
        </div>
        {historyChart}
      </section>
    );

  }
}

export default StockInfo;
