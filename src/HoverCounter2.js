import React, { Component } from 'react'

export class HoverCounter2 extends Component {
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
        <h1 onMouseOver={this.incrementCount}>hovered {count} TIMES</h1>
      )
     }
}

export default HoverCounter2