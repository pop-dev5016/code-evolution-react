import logo from './logo.svg';
import './App.css';
import React from "react";
import FormHandling from './components/FormHandling';
import LifecycleA from './components/LifecycleA';
import Fragment from './components/Fragment';
import Updatinglifecycle from './components/Updatinglifecycle';
import { Component } from "react";
import Table from './components/Table';




class App extends Component {
  render(){
  return (
    <div className="App">
     <Table></Table>
    </div>
  );
}
}

export default App;
