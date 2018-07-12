import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Memory extends Component {
  state = {
    edit: false,
    title: '',
    body: ''
  }

  editMemory = () => {
    this.setState({
      edit: !this.state.edit
    })
  }

  handleEdit = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  editMemoryBackend = () => {
    this.props.handleMemoryEdit(this.props.currentMemory.id, this.state.title, this.state.body)
    this.setState({
      edit: !this.state.edit
    })
  }

  showMemory = () => {
    return (
      <div>
      <p className="currentMemoryTitle">{this.props.currentMemory.title}</p>
        <p className="currentMemory">{this.props.currentMemory.body}</p>
        {this.props.currentMemory.title || this.props.currentMemory.body ?
          <React.Fragment>
            <p className ="DeleteButton"
              onClick={this.editMemory}
              >edit</p>
            <p className ="DeleteButton"
               onClick={(e) => this.props.handleMemoryDelete(e)}
               id = {this.props.currentMemory.id}>delete</p>
          </React.Fragment>
          :
          null
        }
      </div>
    )
  }

  showEdit = () => {
    return (
      <div>
      {this.props.currentMemory.title ?
        <React.Fragment>
        <TextField
          className="editTitle"
          type="text"
          name="title"
          onChange={this.handleEdit}
          value={this.state.title}
          placeholder={this.props.currentMemory.title}
          />
        <br />

        <TextField
          id="multiline-flexible"
          multiline
          rowsMax="200"
          className="editBody"
          margin="normal"
          type="text"
          name="body"
          onChange={this.handleEdit}
          value={this.state.body}
          placeholder={this.props.currentMemory.body}
          />
         <br />
        <input
          type="submit"
          value="submit"
          onClick={this.editMemoryBackend}
          />
       </React.Fragment>
         :
         null
       }
      </div>
    )
  }


  render() {
    return(
      <div>
        { !this.state.edit ? this.showMemory() : this.showEdit() }

      </div>
    )
  }
}
export default Memory;

  // placeholder={this.props.currentMemory.body}
