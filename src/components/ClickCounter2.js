import React, { Component } from 'react'

export class ClickCounter2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

    incrementCount = ()=>{
        this.setState(prevestate=>{
            return{count:prevestate.count+1}
        })
    }
    
  render() {
    const { count } = this.state
    return (
      <button onClick={this.incrementCount}>CLICK {count} TIMES</button>
    )
   }

}

export default ClickCounter2
