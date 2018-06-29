import React, { Component } from 'react';
import Memory from '../components/Memory';
import UUID from 'uuid';

class MemoryContainer extends Component {

  render() {
    console.log("Memory Container Props", this.props.currentMemory);
    return(
      <div className="MemoryContainer" >
      Memory Container
        <h3>{this.props.currentMemory.title}</h3>
        <p>{this.props.currentMemory.body}</p>
        <br />
      </div>
    )
  }
}
export default MemoryContainer;
