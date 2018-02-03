import React from 'react';
import Link from 'react-router-dom';

export const SearchResult = ({symbol}) => (
    <li className="search-result">{symbol.symbol}: {symbol.name}</li>
);

export default SearchResult;
