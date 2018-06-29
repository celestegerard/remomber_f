import React, { Component } from 'react';
import Media from '../components/Media';

class MediaContainer extends Component {

  generateMedia = () => {
    return this.props.currentMemory.map(memory => console.log("CURRANT", memory))
  }

  render() {
    return(
      <div className="MediaContainer" >
      MediaContainer
      <Media />
      <br />
      </div>
    )
  }
}
export default MediaContainer;
