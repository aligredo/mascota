import React, { Component } from 'react';
import axios from 'axios';
import logo from '../mascota.png'
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CustomButton from '../components/CustomButton'

const containerStyle = {
    background: '#9adcfb'
  };

const styles = theme => ({
    container: {
      display: 'flexbox',
      flexWrap: 'wrap',
      height: '100%'
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: "95%",
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
  });

  

class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            email:"",
            firstName: "",
            lastName: "",
            password: "",
            confirmPassword:"",
            mobileNumber:"",
            passwordMatch: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        if(event.target.getAttribute("id") === "firstName"){
            this.setState({firstName: event.target.value});
        }
        if(event.target.getAttribute("id") === "lastName"){
            this.setState({lastName: event.target.value});
        }
        if(event.target.getAttribute("id") === "username"){
            this.setState({username: event.target.value});
        }
        if(event.target.getAttribute("id") === "email"){
            this.setState({email: event.target.value});
        }
        if(event.target.getAttribute("id") === "password"){
            this.setState({password: event.target.value});
        }
        if(event.target.getAttribute("id") === "confirmPassword"){
            this.setState({confirmPassword: event.target.value});
        }
        if(event.target.getAttribute("id") === "mobileNumber"){
            this.setState({mobileNumber: event.target.value});
            console.log(this.state.mobileNumber);
        }
        
      }
    
      handleSubmit(event) {
         if(this.state.password !== this.state.confirmPassword){
            console.log("error");
            this.setState({passwordMatch: true});
            this.forceUpdate();
        }
        else{
          this.setState({passwordMatch: false});
          var userInfo = {
            username: this.state.username,
            email:this.state.email,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            password: this.state.password,
            confirmPassword:this.state.confirmPassword,
            mobileNumber:this.state.mobileNumber
            };

             axios.post('http://localhost:3000/api/auth/register', userInfo )
             .then(function (response) {
              console.log(response);
              if(response.data.code === 200){
                console.log("Register successfull");
              }
          })
          .catch(function (error) {
              console.log(error);
          });

            this.forceUpdate();

        }
        this.props.history.push({pathname: '/Login'});
        event.preventDefault();
      }

      render() {
        var passwordError;
        const { classes } = this.props;
        if(this.state.passwordMatch)
             passwordError = <p>Passowrds do not match</p>
        else
             passwordError = <p></p>
        return (
        <div style={containerStyle} >
                <header>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="mascota">
            <code>Mascota</code> 
          </h1>
        </header>
                <form className={classes.container}  autoComplete="off"> 
                <TextField
                    required
                    onChange={this.handleChange}
                    id="firstName"
                    label="First Name"
                    placeholder="First Name"
                    className={classes.textField}
                    margin="normal"
                 />
                  <TextField
                    required
                    onChange={this.handleChange}
                    id="lastName"
                    label="Last Name"
                    placeholder="Last Name"
                    className={classes.textField}
                    margin="normal"
                 />
                  <TextField
                    required
                    onChange={this.handleChange}
                    id="username"
                    label="Username"
                    placeholder="Username"
                    className={classes.textField}
                    margin="normal"
                 />
                  <TextField
                    required
                    onChange={this.handleChange}
                    id="email"
                    label="Email"
                    placeholder="Email"
                    className={classes.textField}
                    margin="normal"
                 />
                  <TextField
                    required
                    onChange={this.handleChange}
                    id="password"
                    label="Password"
                    type="password"
                    placeholder="Password"
                    className={classes.textField}
                    margin="normal"
                 />
                  <TextField
                    required
                    onChange={this.handleChange}
                    id="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    placeholder=" Confirm Password"
                    className={classes.textField}
                    margin="normal"
                 />
                  <TextField
                    required
                    onChange={this.handleChange}
                    id="mobileNumber"
                    label="Mobile Number"
                    placeholder="Mobile Number"
                    className={classes.textField}
                    margin="normal"
                 />
                {
                  passwordError
                }

          </form>
             <CustomButton name="Submit" onClick={this.handleSubmit}/>
        </div>
         
        );
      };
}

export default withStyles(styles)(Register);