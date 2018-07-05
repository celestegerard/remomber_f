import React, { Component } from 'react';
import NavBar from './containers/NavBar';
import MemoryDetailContainer from './containers/MemoryDetailContainer';
import MemoryForm from './containers/MemoryForm';
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
    currentMember: "",
    families: [],
    tags: []
  }

  handleDropdownSelect = currentMember => {
    this.setState({ currentMember })
  }

  handleMemoryDetailSelect = memoryTitle => {
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
          "Authorization": `${localStorage.getItem("token")}`
        }
      }
    )
    .then(res => res.json())
    .then(memories => this.setState({ memories }))
  }

  handleMemoryFormSubmit = (e) => {
    console.log(e)
  }


  render() {
    // const memories = this.getMemories()
    // const filteredMemories = this.state.memories.filter(memory => memory.member.first_name.includes(this.state.currentMember) )
    return (
        <div className="App">
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
            <NavBar members={this.state.members} handleDropdownSelect={this.handleDropdownSelect} />
            <MemoryDetailContainer memories={this.state.memories} handleMemoryDetailSelect={this.handleMemoryDetailSelect} />
            <MemoryContainer currentMemory={this.state.currentMemory} tags={this.state.tags} />
            <MemoryForm handleMemoryFormSubmit={this.handleMemoryFormSubmit}  />
          </React.Fragment>
          :
          null
          }
        </div>
    );
  }
}

export default App;



// fetch( URL + "memories", {
//     method: "POST",
//     headers: { "Content-type": "application/json" },
//     body: JSON.stringify({ body: post })
//   })
//   .then(res => res.json())
//   .then(post => console.log(post) )
