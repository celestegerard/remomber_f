import React, { Component } from 'react';

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
      <p>{this.props.currentMemory.title}</p>
        <p>{this.props.currentMemory.body}</p>
        {this.props.currentMemory.title ?
          <React.Fragment>
            <input onClick={this.editMemory}
              type="button"
              value="Edit"
              />
            <br />
            <input onClick={(e) => this.props.handleMemoryDelete(e)}
              id = {this.props.currentMemory.id}
              type="submit"
              value="Delete"
              />
            <br />
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
        <input
          type="text"
          name="title"
          onChange={this.handleEdit}
          value={this.state.title}
          placeholder={this.props.currentMemory.title}
          />
        <br />
        <input
          type="text"
          name="body"
          onChange={this.handleEdit}
          value={this.state.body}
            placeholder={this.props.currentMemory.body}
          />
         <br />
        <input
          type="submit"
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
