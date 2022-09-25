import logo from './logo.svg';
import './App.css';
import React from "react";
import FormHandling from './components/FormHandling';
import LifecycleA from './components/LifecycleA';
import Updatinglifecycle from './components/Updatinglifecycle';
import { Component } from "react";




class App extends Component {
  render(){
  return (
    <div className="App">
     <Updatinglifecycle></Updatinglifecycle>
    </div>
  );
}
}

export default App;
