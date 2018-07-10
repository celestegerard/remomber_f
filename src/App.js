import React, { Component } from 'react';
import NavBar from './containers/NavBar';
import MemoryDetailContainer from './containers/MemoryDetailContainer';
import MemoryForm from './containers/MemoryForm';
import MemoryContainer from './containers/MemoryContainer';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import Modal from './components/Modal';
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
    e.preventDefault();
    fetch(
      `http://localhost:3001/api/v1/memories`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json" },
        body: JSON.stringify({ body: e.target.value })
      }
    )
    .then(res => res.json())
    .then(data => console.log(data))
  }


  render() {
    // const memories = this.getMemories()
    console.log(this.state);
    // const filteredMemories = this.state.memories.filter(memory => memory.member.first_name.includes(this.state.currentMember) )

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
      <Modal />
    </Switch>
  </Router>
]

  const routes = [
  <Router>
    <Switch>
      <React.Fragment>
        <NavBar members={this.state.members} handleDropdownSelect={this.handleDropdownSelect} />
        <MemoryDetailContainer memories={this.state.memories} handleMemoryDetailSelect={this.handleMemoryDetailSelect} />
        <MemoryContainer currentMemory={this.state.currentMemory} tags={this.state.tags} />
        <MemoryForm handleMemoryFormSubmit={this.handleMemoryFormSubmit}  />
      </React.Fragment>
    </Switch>
  </Router>
]

    return (

      <div className="App">
        { localStorage > 0 ? routes : preauth }
      </div>
    );
  }
}

export default App;
