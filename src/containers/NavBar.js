import React, { Component } from 'react';
import Filter from '../components/Filter';
import SearchBar from '../components/SearchBar';
import Tag from '../components/Tag';

class NavBar extends Component {
  render() {
    return(
      <div className="Nav">
        <Filter members={this.props.members} handleDropdownSelect={this.props.handleDropdownSelect}/>
        <SearchBar />
          <button>register</button>
          <button>log in</button>
        <br />
      </div>
    )
  }
}
export default NavBar;
