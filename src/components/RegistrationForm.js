import React, { Component } from 'react';
// import AuthAdapter from './'
// AuthAdapter.saveToken(token)

class RegistrationForm extends Component {
  state = {
    username: "",
    password: "",
    first_name: "",
    token: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch(
      `http://localhost:3001/api/v1/members`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": localStorage.getItem("token")
        },
        body: JSON.stringify({ username: this.state.username, password: this.state.password, first_name: this.state.first_name })
      }
    )
    .then(res => res.json())
    .then(json => {
      console.log("json", json)
      localStorage.setItem('token', json.token);
      localStorage.setItem('id', json.id);
      console.log(localStorage);
    })
  }

  render() {
    // console.log( "registration", this.state);
    return (
      <div className="registration">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            onChange={this.handleChange}
            value={this.state.first_name}
          />
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={this.handleChange}
            value={this.state.username}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <input type="submit" value="Register" />
        </form>
      </div>
    )
  }
}

export default RegistrationForm;
