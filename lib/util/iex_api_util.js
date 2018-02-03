export const fetchSymbols = () => (
  $.ajax({
    method: 'get',
    url: `https://api.iextrading.com/1.0/ref-data/symbols`
  })
);

export const fetchQuote = (symbol) => (
  $.ajax({
    method: 'get',
    url: `https://api.iextrading.com/1.0/stock/${symbol}/quote`
  })
);
