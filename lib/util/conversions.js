

export const convertSymbolsToObject = (symbolArr) => {
  const symbolObject = {};
  symbolArr.forEach((symbol) => {
    symbolObject[symbol.symbol] = symbol;
  });
  return symbolObject;
};


export const matchSymbol = (searchTerm, symbol) => {
  const [lowerSearch, lowerSym, lowerName] =
  [searchTerm.toLowerCase(), symbol.symbol.toLowerCase(), symbol.name.toLowerCase() ];

  return (lowerSym.indexOf(lowerSearch) !== -1 ||
          lowerName.indexOf(lowerSearch) !== -1);
};

export const convertToPercent = (numStr) => {
  return Math.round(parseFloat(numStr) * 10000) / 100;
};
