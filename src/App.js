import React, { Component } from 'react';
import NavBar from './containers/NavBar';
import MemoryDetailContainer from './containers/MemoryDetailContainer';
import MediaContainer from './containers/MediaContainer';
import MemoryContainer from './containers/MemoryContainer';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';

import './App.css';
const URL = "http://localhost:3001/api/v1/"

class App extends Component {
  state = {
    token: "",
    memories: [],
    currentMemory: {},
    members: [],
    currentMember: '',
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
    fetch(URL + "memories")
    .then(res => res.json())
    .then(memories => this.setState({ memories }))

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

  render() {
    const filteredMemories = this.state.memories.filter(memory => memory.member.first_name.includes(this.state.currentMember) )
    console.log("THE STATE OF THE APP", this.state);
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
          <br />
          <br />
          <MemoryDetailContainer memories={ filteredMemories } handleMemoryDetailSelect={this.handleMemoryDetailSelect} />
          <MemoryContainer tags={this.state.tags} currentMemory={this.state.currentMemory} />
          <MediaContainer currentMemory={this.state.currentMemory} />
        </div>
    );
  }
}

export default App;
