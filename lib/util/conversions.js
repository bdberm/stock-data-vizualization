

export const convertSymbolsToObject = (symbolArr) => {
  const symbolObject = {};
  symbolArr.forEach((symbol) => {
    symbolObject[symbol.symbol] = symbol;
  });
  return symbolObject;
};
