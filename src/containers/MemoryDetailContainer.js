import React, { Component } from 'react';
import MemoryDetail from '../components/MemoryDetail';
import UUID from 'uuid';

class MemoryDetailContainer extends Component {

  generateMemories = () => {
    return this.props.memories.map(memory => <MemoryDetail handleMemoryDetailSelect={this.props.handleMemoryDetailSelect} memory={memory} />)
  }
  render() {
    const memories = this.generateMemories()
    return(
      <div className="MemoryDetailContainer">
      {memories}
      <br />
      </div>
    )
  }
}
export default MemoryDetailContainer;
