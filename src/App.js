import React, { Component } from 'react';
import NavBar from './containers/NavBar';
import MemoryDetailContainer from './containers/MemoryDetailContainer';
import MediaContainer from './containers/MediaContainer';
import MemoryContainer from './containers/MemoryContainer';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import Adapter from './Adapter';

import './App.css';
const URL = "http://localhost:3000/api/v1/"

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

    return (
        {
          Adapter.loggedIn() ?
        <div className="App">
          <NavBar members={this.state.members} handleDropdownSelect={this.handleDropdownSelect} />
          <MemoryDetailContainer memories={ filteredMemories } handleMemoryDetailSelect={this.handleMemoryDetailSelect} />
          <MemoryContainer tags={this.state.tags} currentMemory={this.state.currentMemory} />
          <MediaContainer currentMemory={this.state.currentMemory} />
        </div>
        :
        null
      }
    );
  }
}

export default App;
