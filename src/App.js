import logo from './logo.svg';
import './App.css';
import React from "react";
import FormHandling from './components/FormHandling';
import { Component } from "react";




class App extends Component {
  render(){
  return (
    <div className="App">
      <FormHandling></FormHandling>
    </div>
  );
}
}

export default App;
