import logo from './logo.svg';
import './App.css';
import React from "react";
import { Component } from "react";
import Counter2 from './components/counter2';
import ClickCounter2 from './components/ClickCounter2';
import HoverCounter2 from './components/HoverCounter2';
import ComponentC from './components/ComponentC'
import User from './components/User';
import { UserProvider } from './components/UserContect';





class App extends Component {
  render(){
  return (
    <div className="App">
      <UserProvider value="viap">
      <ComponentC/>
      </UserProvider>
      
    </div>
  );
}
}

export default App;
