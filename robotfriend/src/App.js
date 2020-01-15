import React, { Component } from 'react';
import Hello from './Hello';
import './App.css';

class App extends Component{
  render(){
    return (
    <div className="App">
      <header className="App-header">
        
        <h1 className = "f1 tc">Cristiane Abreu</h1>
        <h2> More info Click Here{Hello}</h2>
      </header>
    </div>
  );
  }
}

export default App;
