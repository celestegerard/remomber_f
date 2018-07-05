import React, { Component } from 'react';

class Memory extends Component {

  render() {
    return(
      <div>
        <p>{this.props.currentMemory.title}</p>
        <p>{this.props.currentMemory.body}</p>
      </div>
    )
  }
}
export default Memory;
