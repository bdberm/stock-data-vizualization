import React from 'react';
import {Link} from 'react-router-dom';

export const SearchResult = ({symbol, clearSearch}) => (
  <Link to={`/stocks/${symbol.symbol}`}>
    <li className="search-result" onClick={clearSearch}>
      {symbol.symbol}: {symbol.name}</li>
  </Link>
);

export default SearchResult;
