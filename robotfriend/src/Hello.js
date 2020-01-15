import React, { Component } from 'react';
import './Hello.css';

class Hello extends Component{
  render(){
    return (
    <div className="Hello">
      <header className="hello2">
        
        <h1>{this.props.bunbum}</h1>
      </header>
    </div>
  );
  }
}

export default Hello;
