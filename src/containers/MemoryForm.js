import React, { Component } from 'react';

class MemoryForm extends Component {

  render() {
    return(
      <form className="MemoryForm" onSubmit={(e) => this.props.handleMemoryFormSubmit(e)}>
      <label>Record the Memory</label>
      <br />
      <input
        type="text"
        name="title"
        placeholder="The title of your memory..."
      />
      <br />
      <input
        type="text"
        name="body"
        placeholder="What happened?"
      />
      <br />
      <input
        type="submit"
        value="done"
         />
    </form>
    )
  }
}

export default MemoryForm;
