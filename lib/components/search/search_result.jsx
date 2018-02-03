import React from 'react';
import {Link} from 'react-router-dom';

export const SearchResult = ({symbol}) => (
  <Link to={`/stocks/${symbol.symbol}`}>
    <li className="search-result">{symbol.symbol}: {symbol.name}</li>
  </Link>
);

export default SearchResult;
