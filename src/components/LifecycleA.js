import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

export class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"lord shiva"
      }
      console.log("lifecycle constructor");
    }
    static getDerivedStateFromProps(props,state){
        console.log("lifecycle getDerivedStateFromProps");
        return null
    }
     
    componentDidMount(){
        console.log("lifecycle didmount");
    }
    

  render() {
    console.log("render");
    return (
     <div>
         <div>LifecycleA</div>
         <LifecycleB></LifecycleB>
     </div>
    )
  }
}

export default LifecycleA