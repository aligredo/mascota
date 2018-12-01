import React, { Component } from 'react';
import logo from './mascotaBig.png';
import './App.css';
import CustomButton from './components/CustomButton';
import { Route , withRouter , Redirect} from 'react-router-dom'; 
import Login from './containers/Login';

class App extends Component {

   redirect = null;
   

  postSelectedHandler = (event) => {
    this.props.history.push({pathname: '/Login'});
}

postSelectedHandlerS = (event) => {
  this.props.history.push({pathname: '/Register'});
}
  render() {
    let re = null;
    if (this.redirect === true){
        re = <Redirect to='/Login' /> ;
    }
    return (

        <div className="App">
        {re}
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
        {/* <Route path="/Register" exact component ={Register}></Route> */}
        </div>
      
    );
  }
}

export default withRouter(App);
