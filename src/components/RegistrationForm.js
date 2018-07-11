import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import AuthAdapter from './'
// AuthAdapter.saveToken(token)

class RegistrationForm extends Component {
  state = {
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    family_id: "",
    token: "",
    isClicked: false
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
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
          first_name: this.state.first_name,
          family_id: this.state.family_id
        })
      }
    )
    .then(res => res.json())
    .then(json => {
      localStorage.setItem('token', json.token);
      localStorage.setItem('id', json.id);
    })

    fetch(
      `http://localhost:3001/api/v1/families`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": localStorage.getItem("token")
        },
        body: JSON.stringify({
          last_name: this.state.last_name
        })
      }
    )
    .then(res => res.json())
    .then(data => console.log(data))
  }

  handleCheckboxClick = () => {
    this.setState({ isClicked: !this.state.isClicked })
  }

  render() {
    const last_name_field =
    <React.Fragment>
      <label htmlFor="last_name" />
      <input
        type="text"
        name="last_name"
        placeholder="last name"
        onChange={this.handleChange}
        value={this.state.last_name}
        />
    </React.Fragment>

      const family_id_field =
    <React.Fragment>
      <label htmlFor="family_id" />
      <input
        type="text"
        name="family_id"
        placeholder="family ID"
        onChange={this.handleChange}
        value={this.state.family_id}
        />
    </React.Fragment>

    console.log(this.state);

    return (
      <div className="Registration">
        <Link to="/login" className="LoginButton">login</Link>
      <br />
        welcome!
        <br />
        <br />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username" />
          <input
            type="text"
            name="username"
            placeholder="email"
            onChange={this.handleChange}
            value={this.state.username}
          />
        <br />
          <label htmlFor="password" />
          <input
            type="password"
            name="password"
            placeholder="create a password"
            onChange={this.handleChange}
            value={this.state.password}
          />
        <br />
          <label htmlFor="first_name" />
          <input
            type="text"
            name="first_name"
            placeholder="first name"
            onChange={this.handleChange}
            value={this.state.first_name}
          />
        <br />
        { this.state.isClicked ? family_id_field : last_name_field }
        <br />
        <input onClick={this.handleCheckboxClick} type="checkbox" id="familyid" name="subscribe" value="" />
        <label for="family_id"> connect to my family</label>
        <br />
        <br />
        <br />
          <input type="submit" value="continue" />
        </form>
      </div>
    )
  }
}

export default RegistrationForm;
