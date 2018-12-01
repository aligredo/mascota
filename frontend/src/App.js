import React, { Component } from 'react';
import logo from './mascotaBig.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            <code>Mascota</code> 
          </h1>
          <p>The Pet Society</p>
        </header>
      </div>
    );
  }
}

export default App;
