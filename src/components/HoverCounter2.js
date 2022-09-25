import React, { Component } from 'react'

export class HoverCounter2 extends Component {
   render() {
      const { count,incrementCount} = this.props
      return (
        <h1 onMouseOver={incrementCount}>hovered {count} TIMES</h1>
      )
     }
}

export default HoverCounter2