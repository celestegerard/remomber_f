import React, { Component } from 'react';

class MemoryDetail extends Component {
  render() {

    return(
      <div className="MemoryDetail">
        <b onClick={(e) => this.props.handleMemoryDetailSelect(e.target.innerText)}>{this.props.memory.title}</b>
        <p>{this.props.memory.body}</p>
      </div>
    )
  }
}

export default MemoryDetail;
