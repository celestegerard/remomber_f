import React, { Component } from 'react';

class Memory extends Component {
  render() {
    return(
      <div>
        <p>{this.props.memory.title}</p>
        <p>{this.props.memory.body}</p>
      </div>
    )
  }
}
export default Memory;
