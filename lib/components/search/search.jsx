import React from 'react';
import {matchSymbol} from '../../util/conversions';
import SearchResult from './search_result';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {searchTerm: "", searchResults: []};
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    this.props.fetchSymbols();
  }

  handleInput(e) {
    this.setState({searchTerm: e.target.value});
  }

  clearSearch(e) {
    this.setState({searchTerm: "", searchResults: []});
  }

  render() {
    const searchResults = [];

    if (this.state.searchTerm !== "") {
      this.props.symbols.forEach((symbol) => {
        if (matchSymbol(this.state.searchTerm, symbol)) {
          searchResults.push(<SearchResult key={symbol.symbol} symbol={symbol} />);
        }
      });
    }

    return (
      <section className="search-container">
        <form>
          <input className="search-input" type="text"
            value={this.state.searchTerm} placeholder="Search Stocks"
            onChange={this.handleInput}/>
        </form>
        <ul className="search-results">
          {searchResults}
        </ul>
      </section>
    );
  }
}

export default Search;
