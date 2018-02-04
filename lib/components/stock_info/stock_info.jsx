import React from 'react';
import {convertToPercent} from '../../util/conversions';

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
    const {stock} = this.props;

    const percentChange = convertToPercent(stock.changePercent);

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
      </section>
    );

  }
}

export default StockInfo;
