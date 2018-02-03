import React from 'react';

class StockInfo extends React.Component {

  render() {

    return (
      <h1>{this.props.stock.symbol}</h1>
    );

  }
}

export default StockInfo;
