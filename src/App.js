import logo from './logo.svg';
import './App.css';
import Hello from './components/hello';
import Greet from './components/Function';
import Welcome from './components/welcome';

import React from "react";
import { Component } from "react";


class App extends Component {
  render(){
  return (
    <div className="App">
      <Hello/>
    </div>
  );
}
}

export default App;
