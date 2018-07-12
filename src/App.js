import React, { Component } from 'react';
import NavBar from './containers/NavBar';
import MemoryDetailContainer from './containers/MemoryDetailContainer';
import MemoryForm from './containers/MemoryForm';
import MemoryContainer from './containers/MemoryContainer';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
    tags: [],
    searchTerm: ""
  }

  handleDropdownSelect = (e) => {
    this.setState({ currentMember: e.target.value })
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

setMemoryState = (memories) => {
  console.log(memories);
  this.setState({
    memories
  })
}

  handleMemoryFormSubmit = (e) => {
    e.preventDefault();
    let userId = parseInt(localStorage.getItem("id"))
    fetch(
      `http://localhost:3001/api/v1/memories`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `${localStorage.getItem("token")}`
        },
        body: JSON.stringify({
          title: e.target.title.value,
          body: e.target.body.value,
          member_id: `${localStorage.getItem("id")}`
         })
      }
    )
    .then(res => res.json())
    .then(data => {
      this.setState({
        memories: [...this.state.memories, data]
      })
    })
  }

  handleMemoryEdit = (memoryId, memoryTitle, memoryBody) => {
    fetch(
      `http://localhost:3001/api/v1/memories/${memoryId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `${localStorage.getItem("token")}`
        },
        body: JSON.stringify({
          title: memoryTitle,
          body: memoryBody,
          member_id: `${localStorage.getItem("id")}`
         })
      }
    )
    .then(res => res.json())
    .then(data => {
      let newMemories = this.state.memories.map(memory => {
        if (data.id === memory.id) {
          return data
        }
        return memory
      })
      this.setState({
        memories: newMemories,
        currentMemory: data,
      })
    })
  }

  handleMemoryDelete = (e) => {
    let memoryId = parseInt(e.target.id)
    fetch( `http://localhost:3001/api/v1/memories/${e.target.id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${localStorage.getItem("token")}`
      }
    }).then(res => res.json())
    .then(data => {
      let memoriesRemoved = this.state.memories.filter(memory => memory.id !== memoryId)
      this.setState({
        memories: memoriesRemoved,
        currentMemory: {}
      })
    })
  }

  handleSearch = (e) => {
    this.setState({ searchTerm: e.target.value })
    const filteredMemories = this.state.memories.include
  }



  render() {

    const filteredMemories = this.state.memories.filter(memory => console.log(memory) && memory.title.toLowerCase().includes(this.state.searchTerm) || memory.title.toLowerCase().includes(this.state.searchTerm) )

    const preauth = [
    <Router>
      <Switch>
      <Route
       exact path = "/"
        render = { () => <RegistrationForm handleLogInClick={this.handleLogInClick}/> }
        />
      <Route
         exact path = "/login"
        render = { (props) => <LoginForm {...props} /> }
        />
    </Switch>
  </Router>
]




  const routes = [
  <Router>
    <Switch>
        <Route
         exact path = "/"
         render = { () => <React.Fragment>
           <NavBar handleSearch={this.handleSearch} members={this.state.members} handleDropdownSelect={this.handleDropdownSelect} />
           <MemoryDetailContainer  setMemoryState={this.setMemoryState} memories={filteredMemories} handleMemoryDetailSelect={this.handleMemoryDetailSelect} />
           <MemoryContainer handleMemoryEdit={this.handleMemoryEdit} handleMemoryDelete={this.handleMemoryDelete} currentMemory={this.state.currentMemory} tags={this.state.tags} />
           <MemoryForm handleMemoryFormSubmit={this.handleMemoryFormSubmit}  />
         </React.Fragment>
          }
     />
    </Switch>
  </Router>
]


    return (

      <div className="App">
        { localStorage.length > 0 ? routes : preauth }
      </div>
    );
  }
}

export default App;
