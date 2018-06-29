import React, { Component } from 'react';

class Filter extends Component {
  generateMembers = () => {
    return this.props.members.map( member => <option>{member.first_name}</option>)
  }

  render() {
    const membersSelect = this.generateMembers()

    return(
      <div className="filter"  onChange={(e) => this.props.handleDropdownSelect(e.target.value)} >
        <select>
          <option value="all family">family</option>
          { membersSelect }
        </select>
      </div>
    )
  }
}
export default Filter;
