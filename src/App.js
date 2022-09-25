import logo from './logo.svg';
import './App.css';
import React from "react";
import { Component } from "react";
import ClickCounter2 from './components/ClickCounter2';
import HoverCounter2 from './components/HoverCounter2';
import User from './User';





class App extends Component {
  render(){
  return (
    <div className="App">
      <ClickCounter2></ClickCounter2>
      <HoverCounter2></HoverCounter2>
      <User name ="pavithran"></User>
    </div>
  );
}
}

export default App;
