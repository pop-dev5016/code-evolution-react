import React, { Component } from 'react'
import Updatedcomponent from './WithCounter'

class HoverCounter extends Component {

   
  render() {
    const {count,incrementCount}=this.props
    return (
      <div>
        <h2 onMouseOver={incrementCount}>HOVERED {count} TIMES</h2>
      </div>
    )
  }
}

export default Updatedcomponent(HoverCounter)
