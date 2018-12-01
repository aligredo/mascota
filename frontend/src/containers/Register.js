import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

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
            mobileNumber:""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        event.preventDefault();
      }

      render() {
        const { classes } = this.props;
        return (
          <form onSubmit={this.handleSubmit} className={classes.container}>
                <TextField
                    required
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
                    id="pasword"
                    label="Password"
                    type="password"
                    placeholder="Password"
                    className={classes.textField}
                    margin="normal"
                 />
                  <TextField
                    required
                    id="confirmPasword"
                    label="Confirm Password"
                    type="password"
                    placeholder=" Confirm Password"
                    className={classes.textField}
                    margin="normal"
                 />
                  <TextField
                    required
                    id="mobileNumber"
                    label="Mobile Number"
                    placeholder="Mobile Number"
                    className={classes.textField}
                    margin="normal"
                 />
          </form>
        );
      };
}

export default Register;