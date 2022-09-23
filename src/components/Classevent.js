import React, { Component } from 'react'

export class Classclick extends Component {
  Classclick() {
    console.log("i m clicked via class");}

  render() {
    return (
      <div>
        <button onClick={this.Classclick}>CLICK ME</button>
      </div>
    )
  }
}

export default Classclick
