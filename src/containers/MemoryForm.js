import React, { Component } from 'react';

class MemoryForm extends Component {

  render() {
    return(
      <form className="MemoryForm" onSubmit={(e) => this.props.handleMemoryFormSubmit(e)}>
      <label>record the memory</label>
      <br />
      <input
        type="text"
        name="memory"
        placeholder="what happened?"
      />
      <input
        type="submit"
        value="done"
         />
    </form>
    )
  }
}
export default MemoryForm;
