import React, { Component } from 'react';

class Memory extends Component {

  render() {
    return(
      <div>
        <p>{this.props.currentMemory.title}</p>
        <p>{this.props.currentMemory.body}</p>
        {this.props.currentMemory.title ?
          <React.Fragment>
          <input onClick={(e) => this.props.handleMemoryDelete(e)}
            id = {this.props.currentMemory.id}
            type="submit"
            value="delete"
             />
           <input onClick={(e) => this.props.handleMemoryEdit(e)}
             id = {this.props.currentMemory.id}
             type="submit"
             value="edit"
             />
         </React.Fragment>
           :
           null
         }

      </div>
    )
  }
}
export default Memory;
