import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CustomButton from '../components/CustomButton'

const containerStyle = {
    background: '#00bcd4'
  };

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
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
            passowrd: "",
            confirmPassword:"",
            mobileNumber:"",
            passwordMatch: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        if(this.state.passowrd !== this.state.confirmPassword){
            this.state.passwordMatch = true;
        }
        event.preventDefault();
      }

      render() {
        const { classes } = this.props;
        if(this.state.passwordMatch)
            const passwordError = <p>Passowrds do not match</p>
        else
            const passwordError = <p></p>
        return (
            <div style={containerStyle} >
                
                <form className={classes.container} noValidate autoComplete="off"> 
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
                    id="email"
                    label="Email"
                    placeholder="Email"
                    className={classes.textField}
                    margin="normal"
                 />
                  <TextField
                    required
                    onChange={this.handleChange}
                    id="pasword"
                    label="Password"
                    type="password"
                    placeholder="Password"
                    className={classes.textField}
                    margin="normal"
                 />
                  <TextField
                    required
                    onChange={this.handleChange}
                    id="confirmPasword"
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
             <CustomButton name = "Submit" onClick={this.handleSubmit}/>
            </div>
         
        );
      };
}

export default withStyles(styles)(Register);