import React, { Component } from 'react';

class LoginForm extends Component {
  state = {
    username: "",
    password: "",
    first_name: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3001/api/v1/sessions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username: this.state.username, password: this.state.password })
      }
    )
    .then(res => res.json())
    .then(json => {
      console.log(json);
      localStorage.setItem('token', json.token);
      localStorage.setItem('id', json.id);
      console.log(localStorage);
    })
  }

  render() {
    return (
      <div className="login">
        <form onSubmit={this.handleSubmit}>
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
          <input type="submit" value="Login" />
        </form>
      </div>
    )
  }
}

export default LoginForm;
