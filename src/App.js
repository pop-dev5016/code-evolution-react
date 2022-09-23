import logo from './logo.svg';
import './App.css';
import Hello from './components/hello';
import Greet from './components/Function';
import Welcome from './components/welcome';
import Message from './components/message';
import Counter from './components/Counter';
import React from "react";
import { Component } from "react";


class App extends Component {
  render(){
  return (
    <div className="App">
      {/* <Hello/> */}
      
      {/* <Greet name="pavi" regno="2012505016"  >
        this is childern props
      </Greet>
      <Greet name="viki" regno="2012505017">
        <button>DONT CLICK</button>
      </Greet>
      <Greet name="nava" regno="2012505018"></Greet>
      <Greet name="appa" regno="2012505019"></Greet>
      <Greet name="amma" regno="2012505020"></Greet>
      <Welcome name="nava" regno="2012505018"></Welcome>
      <Welcome name="appa" regno="2012505019" ></Welcome> */}
      {/* <Message></Message> */}
      {/* <Counter></Counter> */}
      <Greet name="nava" regno="2012505018"></Greet>
      <Greet name="appa" regno="2012505019"></Greet>

    </div>
  );
}
}

export default App;
