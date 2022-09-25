import React, { Component } from 'react'
import Memocomponents from './Memocomponents'
import RegularComponent from './RegularComponent'
import PureCom from './PureCom'

class ParentComponent2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"pavithran"
      }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:"pavitharan"
            })
        },2000)
    }
  render() {
    console.log("***********************parent component render***********************");
    return (
     <div>
         <div>ParentComponent</div>
         {/* <RegularComponent name = {this.state.name}></RegularComponent>
         <PureCom name = {this.state.name}></PureCom> */}
         <Memocomponents name = {this.state.name}></Memocomponents>
     </div>
    )
  }
}

export default ParentComponent2