import React from 'react';

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
    return (
      <section className="stock-info-container">
        <h1>{stock.symbol}: {stock.name}</h1>
        <ul className="basic-stock-info">
          <li>Latest Price: {stock.latestPrice}</li>
          <li>Latest Volume: {stock.latestVolume}</li>
        </ul>
      </section>
    );

  }
}

export default StockInfo;
