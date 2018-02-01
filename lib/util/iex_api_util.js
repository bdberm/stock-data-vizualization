export const fetchSymbols = () => (
  $.ajax({
    method: 'get',
    url: `https://api.iextrading.com/1.0/ref-data/symbols`
  })
);
