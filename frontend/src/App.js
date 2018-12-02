import React, { Component } from 'react';
import logo from './mascotaBig.png';
import './App.css';
import CustomButton from './components/CustomButton';
import { Route , withRouter} from 'react-router-dom'; 
import Login from './containers/Login';
import Register from './containers/Register';
import Home from './containers/Home';
import Profile from './containers/Profile';
import addPet from './containers/addPet';

class App extends Component {

   redirect = null;
   

  postSelectedHandler = (event) => {
    this.props.history.push({pathname: '/Login'});
}

postSelectedHandlerS = (event) => {
  this.props.history.push({pathname: '/Register'});
}
  render() {

    return (

        <div className="App">
        <Route path="/" exact render = {() =>  <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="mascota">
            <code>Mascota</code> 
          </h1>
          <p>The Pet Society</p>
          <CustomButton  name="Sign Up" onClick={this.postSelectedHandlerS}/>
          <CustomButton  name="Login" onClick={this.postSelectedHandler}/>
        </header>}></Route>

        <Route path="/Login" exact component ={Login}></Route>
        <Route path="/Register" exact component ={Register}></Route>
        <Route path="/Home" exact component ={Home}></Route>
        <Route path="/Profile" exact component ={Profile}></Route>
        <Route path="/addPet" exact component ={addPet}></Route>
        </div>
      
    );
  }
}

export default withRouter(App);
