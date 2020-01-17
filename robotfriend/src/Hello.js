import React, { Component } from 'react';
import './Hello.css';

class Hello extends Component{
  render(){
    return (
    <div className="">
      <header className="fl w-100">
        
        <h1>{this.props.bunbum}</h1>
      </header>
      
    </div>
  );
  }
}

export default Hello;
