import React, { Component } from 'react';

class MemoryDetail extends Component {
  render() {

    return(
      <div className="MemoryDetail">
        <p onClick={(e) => this.props.handleMemoryDetailSelect(e.target.innerText)}>{this.props.memory.title}</p>
      </div>
    )
  }
}

export default MemoryDetail;
