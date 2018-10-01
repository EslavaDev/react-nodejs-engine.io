import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import eio from 'engine.io-client';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Test RealTime with node",
      sensorValue:0,
      memory:0
    }
  }

  componentDidMount = () => {
      var socket = eio("ws://localhost:8080")
      socket.on("open", ()=>{
        socket.on("message", (data)=>{
          let sock = JSON.parse(data)
         console.log(sock)
         // Object.assign(sock.m, {key: sock.m.rss})
          this.setState({sensorValue:JSON.stringify(sock.a), memory: JSON.stringify(sock.b)})
        })
      });
  }
  
  
  render() {
    const {title, sensorValue, memory} = this.state
    //let memory = Object.assign(memory,{key: memory.rss})
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{title}</h1>
          </header>
          <h1>{memory}</h1> <br/>
          <h1>{sensorValue}</h1>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <br/>
          {sensorValue}
        </p>
      </div>
    );
  }
}

export default App;
