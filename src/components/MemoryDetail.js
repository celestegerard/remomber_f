import React, { Component } from 'react';

class MemoryDetail extends Component {
  render() {
    console.log("memory detail props", this.props);
    return(
      <div className="MemoryDetail">
        <p onClick={(e) => this.props.handleMemoryDetailSelect(e.target.innerText)}>{this.props.memory.title}</p>
      </div>
    )
  }
}
export default MemoryDetail;
