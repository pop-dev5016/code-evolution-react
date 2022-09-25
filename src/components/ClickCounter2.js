import React, { Component } from 'react'

export class ClickCounter2 extends Component {
    
  render() {
    const { count,incrementCount } = this.props
    return (
      <button onClick={incrementCount}>CLICK {count} TIMES</button>
    )
   }

}

export default ClickCounter2
