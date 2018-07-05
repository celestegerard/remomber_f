import React, { Component } from 'react';
import Memory from '../components/Memory';

class MemoryContainer extends Component {

  render() {
    return(
      <div className="MemoryContainer" >
        <Memory currentMemory={this.props.currentMemory} />
      </div>
    )
  }
}

export default MemoryContainer;
