import React, { Componet } from 'react';

getMemories = () => {
  fetch(
    `http://localhost:3000/users/${localStorage.getItem("id")}/snacks`,
    {
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("token")
      }
    }
  )
  .then(res => res.json())
  .then(json => {
    this.setState({
      snacks: json,
      });
    });
}

export default MyMemory;
