import React, { Component } from 'react';
import Filter from '../components/Filter';
import SearchBar from '../components/SearchBar';

class NavBar extends Component {
  render() {
    return(
      <div className="Nav">
        <Filter members={this.props.members} handleDropdownSelect={this.props.handleDropdownSelect}/>
        <SearchBar handleSearch={this.props.handleSearch} />
        <br />
      </div>
    )
  }
}

export default NavBar;
