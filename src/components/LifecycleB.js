import React, { Component } from 'react'

export class LifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"lord shiva"
      }
      console.log("lifecycle constructor(b)");
    }
    static getDerivedStateFromProps(props,state){
        console.log("lifecycle getDerivedStateFromProps(b)");
        return null
    }
     
    componentDidMount(){
        console.log("lifecycle didmount(b)");
    }
    

  render() {
    console.log("render(b)");
    return (
      <div>lifecycleB</div>
    )
  }
}

export default LifecycleB