import React, { Component } from 'react'
import FRinput from './components/FRinput'

class FRcurrentInput extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
      }

      clickhandler=()=>{
        this.inputRef.current.focus()
      }
  render() {
    return (
      <div>
        <FRinput ref={this.inputRef}></FRinput>
        <button onClick={this.clickhandler}>focus input</button>
      </div>
    )
  }
}

export default FRcurrentInput
