import logo from './logo.svg';
import './App.css';
import React from "react";
import { Component } from "react";
import Counter2 from './components/counter2';
import ClickCounter2 from './components/ClickCounter2';
import HoverCounter2 from './components/HoverCounter2';
import User from './components/User';





class App extends Component {
  render(){
  return (
    <div className="App">
      {/* <ClickCounter2></ClickCounter2>
      <HoverCounter2></HoverCounter2>
      <User render ={(isloggedin)=>isloggedin?"pavithran":"guest"}></User> */}
      <Counter2 
      render={(Count,incrementCount)=>(
      <ClickCounter2 count={Count} incrementCount = {incrementCount}/>)}/>



      <Counter2 
      render={(Count,incrementCount)=>(
      <HoverCounter2 count={Count} incrementCount = {incrementCount}/>)}/>
   
      

      
    </div>
  );
}
}

export default App;
