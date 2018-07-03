import React, { Component } from 'react';

class Filter extends Component {
  // generateMembers = () => {
  //   return this.props.members.map( member => <option>{member.first_name}</option>)
  // }

  render() {
    // const membersSelect = this.generateMembers()
    // console.log("membersSelect", membersSelect);


    return(
      <div className="filter"  onChange={(e) => this.props.handleDropdownSelect(e.target.value)} >
        <select>
          <option value="all family">family</option>
        </select>
      </div>
    )
  }
}
export default Filter;
// { membersSelect }
