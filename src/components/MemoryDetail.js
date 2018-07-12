import React, { Component } from 'react';

class MemoryDetail extends Component {
  render() {
    console.log(this.props.memory.body.slice(0, 30));

    return(
      <div className="MemoryDetail">
        <p className="MemoryDetailTitle" onClick={(e) => this.props.handleMemoryDetailSelect(e.target.innerText)}>{this.props.memory.title}</p>
        <p className="MemoryDetailBody" >{this.props.memory.body.slice(0, 63) + '...'}</p>
      </div>
    )
  }
}

export default MemoryDetail;
