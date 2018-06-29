import React, { Component } from 'react';
import Filter from '../components/Filter';
import SearchBar from '../components/SearchBar';
import Tag from '../components/Tag';

class NavBar extends Component {
  render() {
    return(
      <div>
      NavBar
      <Filter members={this.props.members} handleDropdownSelect={this.props.handleDropdownSelect}/>
      <SearchBar />
      <Tag />
      <br />
      </div>
    )
  }
}
export default NavBar;
