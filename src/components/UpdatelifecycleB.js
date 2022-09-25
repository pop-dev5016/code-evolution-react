import React, { Component } from 'react'

export class UpdatinglifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"lord shiva"
      }
      console.log("lifecycleB constructor(b)");
    }
    static getDerivedStateFromProps(props,state){
        console.log("lifecycleB getDerivedStateFromProps(b)");
        return null
    }
    shouldComponentUpdate(){
        console.log("lifecyclebB shouldcpmponentujpdate");
        return true
    }


    getSnapshotBeforeUpdate(prevProps,prevstate){
        console.log("lifecycleb  getSnapshotBeforeUpdate ");
        return null
    }

    componentDidUpdate(){
        console.log("Lifecycleb componentdidupdate");
    }
     
    componentDidMount(){
        console.log("lifecycleb didmount(b)");
    }
    

  render() {
    console.log("render(b)");
    return (
      <div>
      <div>lifecycleB</div>
      </div>
    )
  }
}

export default UpdatinglifecycleB