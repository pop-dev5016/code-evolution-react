import logo from './logo.svg';
import './App.css';
import Hello from './components/hello';
import Greet from './components/Function';
import Welcome from './components/welcome';
import Message from './components/message';
import Counter from './components/Counter';
import Functionclick from './Functionclick';
import EventBinding from './components/EventBinding';
import ParentComponent from './components/ParentComponent';
import Stylesheet from './components/Stylesheet';
import React from "react";
import NameList from './components/NameList';
import Classclick from './components/Classevent';
import { Component } from "react";
import UserGreeting from './components/UserGreeting';



class App extends Component {
  render(){
  return (
    <div className="App">
      {/* <Hello/> */}
      {/* <Functionclick/> */}
      {/* <Greet name="pavi" regno="2012505016"  >
        this is childern props
      </Greet>
      <Greet name="viki" regno="2012505017">
        <button>DONT CLICK</button>
      </Greet>
      <Greet name="nava" regno="2012505018"></Greet>
      <Greet name="appa" regno="2012505019"></Greet>
      <Greet name="amma" regno="2012505020"></Greet>
      <Welcome name="appa" regno="2012505019" ></Welcome> */}
      {/* <Message></Message> */}
      {/* <Counter></Counter> */}
      {/* <Greet name="nava" regno="2012505018"></Greet>
      <Greet name="appa" regno="2012505019"></Greet> */}
      {/* <Welcome name="nava" regno="2012505018"></Welcome> */}
      {/* <Classclick></Classclick> */}
      {/* <EventBinding></EventBinding> */}
      {/* <ParentComponent></ParentComponent> */}
      {/* <UserGreeting></UserGreeting> */}
      {/* <NameList></NameList> */}
      <Stylesheet primary={true}></Stylesheet>
    </div>
  );
}
}

export default App;
