import React, { Component } from 'react'
import UpdatinglifecycleB from './UpdatelifecycleB';

export class Updatinglifecycle extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"lord shiva"
      }
      console.log("lifecycleA constructor");
    }
    static getDerivedStateFromProps(props,state){
        console.log("lifecycleA getDerivedStateFromProps");
        return null
    }
     
    componentDidMount(){
        console.log("lifecycleA didmount");
    }

    shouldComponentUpdate(){
        console.log("lifecycleA shouldcpmponentujpdate");
        return true
    }


    getSnapshotBeforeUpdate(prevProps,prevstate){
        console.log("lifecycleA  getSnapshotBeforeUpdate ");
        return null
    }

    componentDidUpdate(){
        console.log("LifecycleA componentdidupdate");
    }
    changestate = ()=>{
        this.setState({
            name:'codeevolution'
        })
    }

  render() {
    console.log("renderAA");
    return (
     <div>
         <div>LifecycleA</div>
         <button onClick={this.changestate}>change state</button>
         <UpdatinglifecycleB></UpdatinglifecycleB>
     </div>
    )
  }
}

export default Updatinglifecycle