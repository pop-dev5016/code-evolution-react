import React from "react";
import { Component } from "react";

class Welcome extends Component {

   render(){
      const {name,regno} = this.props
      //const {name,regno} = this.state
        return <h1>welcome {name} and {regno}</h1>
   }
}

export default Welcome