import React, { Component } from 'react';
import Filter from '../components/Filter';
import SearchBar from '../components/SearchBar';

class NavBar extends Component {
  render() {
    return(
      <div className="NavBar">
        <SearchBar handleSearch={this.props.handleSearch} />
        <br />
      </div>
    )
  }
}

export default NavBar;

// <Filter members={this.props.members} handleDropdownSelect={this.props.handleDropdownSelect}/>
