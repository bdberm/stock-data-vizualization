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
      <h1>{stock.symbol}: {stock.name}</h1>
    );

  }
}

export default StockInfo;
