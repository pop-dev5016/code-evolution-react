import React, { Component } from 'react'

 class EventBinding extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"hello"
      }
    }
    clickhandler(){
        this.setState({
            message:"GOOD BYE"
    })
}
    
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickhandler.bind(this)}>click</button> */}
        <button onClick={()=>this.clickhandler()}>click</button>
      </div>
    )
  }
}

export default EventBinding
