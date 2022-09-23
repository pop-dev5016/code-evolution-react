import React, { Component } from 'react'

 class EventBinding extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"hello"
      }
    //   this.clickhandler = this.clickhandler.bind(this)
    }
//     clickhandler(){
//         this.setState({
//             message:"GOOD BYE"
//     })
//  }
     clickhandler = () =>{
        this.setState({
            message:"Goodbye!!!!!!!!!!!!!"
        })
     }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickhandler.bind(this)}>click</button> */}
        {/* <button onClick={()=>this.clickhandler()}>click</button> */}
        <button onClick={this.clickhandler}>click</button>
      </div>
    )
  }
}

export default EventBinding
