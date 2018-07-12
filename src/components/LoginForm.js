import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password
        })
      }
    )
    .then(res => res.json())
    .then(json => {
      localStorage.setItem('token', json.token);
      localStorage.setItem('id', json.id);
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="paddingTop">
        </div>
        <div className="Login">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="username"></label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={this.handleChange}
              value={this.state.username}
            />
          <br />
            <label htmlFor="password"></label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          <br />
          <br />
            <input type="submit" value="Login" />
            <p className="loginText">new? <Link to ="/" >sign up</Link> </p>
          </form>
        </div>
      </React.Fragment>
    )
  }
}

export default LoginForm;
