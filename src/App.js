import logo from './logo.svg';
import './App.css';
import React from "react";
import FormHandling from './components/FormHandling';
import LifecycleA from './components/LifecycleA';
import Fragment from './components/Fragment';
import Updatinglifecycle from './components/Updatinglifecycle';
import { Component } from "react";
import Table from './components/Table';
import PureCom from './components/PureCom';
import ParentComponent2 from './components/ParentComponent2';
import RefsDemo from './components/RefsDemo';
import Input from './components/Input';
import Focusinput from './components/Focusinput';





class App extends Component {
  render(){
  return (
    <div className="App">
     <Focusinput></Focusinput>

    </div>
  );
}
}

export default App;
