import React from 'react';
import Link from 'react-router-dom';

export const SearchResult = ({symbol}) => (
    <li>{symbol.symbol}: {symbol.name}</li>
);

export default SearchResult;
