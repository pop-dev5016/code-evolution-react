import React from "react";
import { Component } from "react";

class Welcome extends Component {

   render(){
      const {name,hero} = this.props
        return <h1>welcome {this.props.name} and {this.props.regno}</h1>
   }
}

export default Welcome