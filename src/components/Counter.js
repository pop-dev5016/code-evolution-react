import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

    increment(){
    //     this.setState({
    //         count: this.state.count+1
    //     },()=>{
    //         console.log("callback + value : ",this.state.count);
    //     })
    //    console.log("state veliya + ",this.state.count);

     this.setState(prevState=>({    ////(one pervious state,props)
        count:prevState.count +1        ///(prevstae.count+props.addvalue)
     }))

     console.log(this.state.count);
    }

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    
    }


    decrement(){
        this.setState({
            count: this.state.count-1
        },()=>{
            console.log("callback - value : ",this.state.count);
        })
        console.log("state veliya -",this.state.count);
    }
    
  render() {
    return (
     <div>
        <button onClick={()=>this.decrement()}>decrement</button>
        <div>count-{this.state.count}</div>
        <button onClick={()=>this.incrementFive()}>increment</button>
     </div>
    
    )
  }
}

export default Counter
