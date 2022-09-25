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
import FRinput from './components/FRinput';
import FRcurrentInput from './FRcurrentInput';
import PortalDemo from './components/PortalDemo'
import Hero from './components/Hero';
import ErrorHandling from './components/ErrorHandling';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';





class App extends Component {
  render(){
  return (
    <div className="App">
      <ClickCounter name="gandhi"></ClickCounter>
      <HoverCounter></HoverCounter>
    </div>
  );
}
}

export default App;
