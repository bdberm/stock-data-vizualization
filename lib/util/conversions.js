

export const convertSymbolsToObject = (symbolArr) => {
  const symbolObject = {};
  symbolArr.forEach((symbol) => {
    symbolObject[symbol.symbol] = symbol;
  });
  return symbolObject;
};

// export const searchSymbols = (searchTerm, symbolArr) => {
//   const lowerSearch = searchTerm.toLowerCase();
//   return symbolArr.filter((symbol) => {
//     return (symbol.symbol.toLowerCase().indexOf(lowerSearch) !== -1 ||
//             symbol.name.toLowerCase().indexOf(lowerSearch) !== -1);
//   });
// };

export const matchSymbol = (searchTerm, symbol) => {
  const [lowerSearch, lowerSym, lowerName] =
  [searchTerm.toLowerCase(), symbol.symbol.toLowerCase(), symbol.name.toLowerCase() ];

  return (lowerSym.indexOf(lowerSearch) !== -1 ||
          lowerName.indexOf(lowerSearch) !== -1);
};
