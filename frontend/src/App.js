import React, { Component } from 'react';
import logo from './mascotaBig.png';
import './App.css';
import CustomButton from './components/CustomButton'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="mascota">
            <code>Mascota</code> 
          </h1>
          <p>The Pet Society</p>
          <CustomButton  name="Sign Up"/>
          <CustomButton  name="Login"/>
        </header>
      </div>
    );
  }
}

export default App;
