import React, { Component } from 'react';
import UUID from 'uuid'

class Filter extends Component {

  generateMembers = () => {
    return this.props.members.map( member => <option key={UUID()} >{member.first_name}</option>)
  }

  render() {
    const membersSelect = this.generateMembers();


    return(
      <div className="Filter"  onClick={(e) => this.props.handleDropdownSelect(e)} >
        <select>
          <option></option>
          {membersSelect}
        </select>
      </div>
    )
  }
}
export default Filter;
