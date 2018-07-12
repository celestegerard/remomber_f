import React, { Component } from 'react';

class MemoryDetail extends Component {
  render() {

    return(
      <div className="MemoryDetail">
        <p className="MemoryDetailTitle" onClick={(e) => this.props.handleMemoryDetailSelect(e.target.innerText)}>{this.props.memory.title}</p>
        <p className="MemoryDetailBody" >{this.props.memory.body.slice(0, 77) + '...'}</p>
      </div>
    )
  }
}

export default MemoryDetail;
