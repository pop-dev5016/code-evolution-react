import React from "react";
import { Component } from "react";

class Message extends Component {
    constructor(){
        super()
        this.state = {
            message: "welcome visitor"
        }
    }

   changemessage(){
      this.setState({
        message:"thank u for subcribing"
      })
   }


   render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changemessage()}>subscribe me  plzz</button>
            </div>
        )
   }
}

export default Message