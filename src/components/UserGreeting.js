import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedin:false
      }
    }
    
  render() {
    

    return this.state.isLoggedin?
    <div>Welcome poppy</div>:
    <div>Welcome guest</div>









    //  let message 
    //  if(this.state.isLoggedin){
    //         message = <div>Welcome poppy</div>
    //      }else{
    //         message = <div>Welcome guest</div>
    //      }
    //  return <div>{message}</div>


    // if(this.state.isLoggedin){
    //     return (
    //         <div>welcome poppy</div>
    //     )
    // }else{
    //     return(
    //         <div>
    //             welcome guest
    //         </div>
    //     )
    // }
    // return (
    //   <div>
    //   <div>welcome poppy!!!</div>
    //   <div>welcome guest</div>
    //   </div>
    // )
  }
}

export default UserGreeting
