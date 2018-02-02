import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {searchTerm: "", searchResults: []};
  }

  componentDidMount() {
    this.props.fetchSymbols();
  }

  render() {

    return (
      <section className="search-container">
        <form>
          <input type="text" value={this.state.searchTerm} placeholder="Search Stocks" />
        </form>
      </section>
    );
  }
}

export default Search;
