import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function SayHello(){
  return <h1>hello</h1>
}

class App extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
       
         
         <SayHello></SayHello>
        
      </div>
    );
  }
}

export default App;
