import React, { Component } from 'react';
import MemoryDetail from '../components/MemoryDetail';
import UUID from 'uuid'
import Filter from '../components/Filter';
import SearchBar from '../components/SearchBar'

class MemoryDetailContainer extends Component {


  generateMemories = () => {
    return this.props.memories.map(memory => <MemoryDetail handleSearch={this.props.handleSearch} key={UUID()} handleMemoryDetailSelect={this.props.handleMemoryDetailSelect} memory={memory} />)
  }

  componentDidMount = () => {
    let id = localStorage.getItem("id")
    fetch(
      `http://localhost:3001/api/v1/memories`,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `${localStorage.getItem("token")}`
        }
      }
    )
    .then(res => res.json())
    .then(memories => this.props.setMemoryState(memories))
  }

  render() {
    const memoryDetail = this.generateMemories()
    return(
      <React.Fragment>
          <div className="Column MemoryDetailContainer">
            <SearchBar className="SearchBar" handleSearch={this.props.handleSearch} />
            { memoryDetail }
          </div>
        </React.Fragment>
    )
  }
}

export default MemoryDetailContainer;
