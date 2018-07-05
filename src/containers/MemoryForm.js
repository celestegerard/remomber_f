import React, { Component } from 'react';

class MemoryForm extends Component {

  render() {
    return(
      <form className="MemoryForm">
      <label>Write a memory</label>
      <br />
      <input
        type="text"
        name="memory"
        placeholder="what happened?"
        onSubmit={(e) => this.props.handleMemoryFormSubmit(e)}
      />
      <input type="submit" value="done" />
    </form>
    )
  }
}
export default MemoryForm;
