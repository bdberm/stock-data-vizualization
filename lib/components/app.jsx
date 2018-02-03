import React from 'react';
import {Route} from 'react-router-dom';
import SearchContainer from './search/search_container';
import StockInfoContainer from './stock_info/stock_info_container';


const App = () => (
  <section id="app">
    <Route path="/" component={SearchContainer} />
    <Route path="/stocks/:symbol" component={StockInfoContainer}/>
  </section>
);


export default App;
