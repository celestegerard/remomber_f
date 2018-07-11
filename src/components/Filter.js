import React, { Component } from 'react';
import UUID from 'uuid'

class Filter extends Component {

  generateMembers = () => {
    return this.props.members.map( member => <option key={UUID()} >{member.first_name}</option>)
  }

  render() {
    const membersSelect = this.generateMembers();


    return(
      <div className="filter"  onClick={(e) => this.props.handleDropdownSelect(e)} >
        <select>
          <option value="all family">family</option>
          {membersSelect}
        </select>
      </div>
    )
  }
}
export default Filter;
