import React, { Component } from 'react';
import NavBar from './containers/NavBar';
import MemoryDetailContainer from './containers/MemoryDetailContainer';
import MediaContainer from './containers/MediaContainer';
import MemoryContainer from './containers/MemoryContainer';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import Memory from './components/Memory';

import './App.css';
const URL = "http://localhost:3001/api/v1/"

class App extends Component {
  state = {
    token: "",
    memories: [],
    currentMemory: {},
    members: [],
    currentMember: "",
    families: [],
    tags: []
  }

  handleDropdownSelect = (currentMember) => {
    this.setState({ currentMember })
  }

  handleMemoryDetailSelect = (memoryTitle) => {
    const currentMemory = this.state.memories.find(memory => memory.title === memoryTitle)
    this.setState({ currentMemory })
  }

  componentDidMount() {

    fetch(URL + "families")
    .then(res => res.json())
    .then(families => this.setState({ families }))

    fetch(URL + "members")
    .then(res => res.json())
    .then(members => this.setState({ members }))

    fetch(URL + "tags")
    .then(res => res.json())
    .then(tags => this.setState({ tags }))
  }

  getMemories = () => {
    fetch(
      `http://localhost:3001/api/v1/members/${localStorage.getItem("id")}/memories`,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InN1c2FuIiwiaWQiOjF9.uHSy5vuMGMuZvljunf_uQ6ciT3A9YoL_4WsVj1q4lFE"
        }
      }
    )
    .then(res => res.json())
    .then(memories => console.log(memories))
    }

  render() {
    // const mems = this.getMemories()
    // const filteredMemories = this.state.memories.filter(memory => memory.member.first_name.includes(this.state.currentMember) )
    return (
        <div className="App">
          <NavBar members={this.state.members} handleDropdownSelect={this.handleDropdownSelect} />
          To Register:
          <br />
          <RegistrationForm />
          <br />
          <br />
          To Login:
          <LoginForm />
          {
            localStorage.length > 0 ?
            <React.Fragment>
            <MemoryDetailContainer handleMemoryDetailSelect={this.handleMemoryDetailSelect} />
            <MemoryContainer tags={this.state.tags} />
            <MediaContainer  />
          </React.Fragment>
          :
          null
          }
        </div>
    );
  }
}

export default App;
