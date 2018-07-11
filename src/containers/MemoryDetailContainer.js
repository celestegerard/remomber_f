import React, { Component } from 'react';
import MemoryDetail from '../components/MemoryDetail';
import UUID from 'uuid'

class MemoryDetailContainer extends Component {

  generateMemories = () => {
    return this.props.memories.map(memory => <MemoryDetail handleSearch={this.props.handleSearch} key={UUID()} handleMemoryDetailSelect={this.props.handleMemoryDetailSelect} memory={memory} />)
  }

  render() {
    const memoryDetail = this.generateMemories()
    return(
      <div className="MemoryDetailContainer">
        { localStorage > 0 ? memoryDetail : null }
      </div>
    )
  }
}

export default MemoryDetailContainer;
