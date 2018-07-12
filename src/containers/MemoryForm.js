import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class MemoryForm extends Component {
  state={
    clicked: false
  }

  render() {
    return(
      <div className="Column MemoryForm">
        <p className="AddButton"> add</p>
        { this.state.clicked}
        <form className="TextFields" onSubmit={(e) => this.props.handleMemoryFormSubmit(e)}>
        <br />
        <TextField
          className="TitlePost"
          type="text"
          name="title"
          placeholder="Title"
        />
      <br />
        <TextField
          name="body"
            id="multiline-static"
            multiline
            rows="4"
            rowsMax="16"
            className="BodyTextField"
            margin="normal"
          />
        <br />
        <input
          type="submit"/>
      </form>
    </div>
    )
  }
}

export default MemoryForm;
