import React, { Component } from 'react';
import Memory from '../components/Memory';
import UUID from 'uuid';

class MemoryContainer extends Component {
  state = {
    memories: [],
    currentMemory: {}
  }

  render() {
    return(
      <div className="MemoryContainer" >Memory Container
        <Memory />
      </div>
    )
  }
}
export default MemoryContainer;
