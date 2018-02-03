import React from 'react';

class StockInfo extends React.Component {

  render() {
    const {stock} = this.props;
    return (
      <h1>{stock.symbol}: {stock.name}</h1>
    );

  }
}

export default StockInfo;
