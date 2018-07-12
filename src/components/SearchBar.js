import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return(
      <div className="SearchBar">
      <input
        placeholder="search"
        type="text"
        onChange={(e) => this.props.handleSearch(e)}
        ></input>
      </div>
    )
  }
}
export default SearchBar;
