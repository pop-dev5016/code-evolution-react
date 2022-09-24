import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedin:false
      }
    }
    
  render() {
    if(this.state.isLoggedin){
        return (
            <div>welcome poppy</div>
        )
    }else{
        return(
            <div>
                welcome guest
            </div>
        )
    }
    // return (
    //   <div>
    //   <div>welcome poppy!!!</div>
    //   <div>welcome guest</div>
    //   </div>
    // )
  }
}

export default UserGreeting
