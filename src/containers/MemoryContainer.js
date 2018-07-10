import React, { Component } from 'react';
import Memory from '../components/Memory';

class MemoryContainer extends Component {

  render() {
    console.log(this.props);
    return(
      <div className="MemoryContainer" >
        <Memory currentMemory={this.props.currentMemory} />
      </div>
    )
  }
}

export default MemoryContainer;
