import React , { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CustomButton from '../components/CustomButton';
import axios from 'axios';
import logo from "../mascota.png";
import { withRouter} from 'react-router-dom'; 

const containerStyle = {
    background: '#9adcfb'
};

const styles = theme => ({
    container: {
        display: 'flexbox',
        flexWrap: 'wrap',
        height: '49vh'
    },
    textField:{
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: '95%'
    },
    dense: {
        marginTop: 19
    },
    menu: {
        width: 200
    }
});


class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        if(event.target.getAttribute("id") === "email"){
            this.setState({email: event.target.value});
            console.log(this.state.email)
        }
        if(event.target.getAttribute("id") === "password"){
            this.setState({password: event.target.value});
            console.log(this.state.password)
        }
    }

    handleSubmit(event){
        var apiBaseUrl = "http://localhost:3000/api/";

            axios.post(apiBaseUrl+'auth/login', {
                email: this.state.email,
                password: this.state.password
                })
            .then(function (response) {
                console.log(response);
                if(response.status === 200){
                  console.log("login successfull");
                  localStorage.setItem('user',  JSON.stringify(response.data.data));
                  localStorage.setItem('login',  JSON.stringify(response.status));
                  console.log(JSON.parse(localStorage.getItem('user')));
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        
        if(JSON.parse(localStorage.getItem('login')) === 200)
            this.props.history.replace({pathname: '/Home'});
        event.preventDefault();
    }

    render() {
        const { classes } = this.props;
        return (
            <div style={containerStyle} >
            
            <header>
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className = "mascota">
                    <code>Mascota</code>
                </h1>
            </header>
                
                <form className={classes.container}  autoComplete="off"> 
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
                 <CustomButton name = "Submit" onClick={this.handleSubmit}/>
          </form>
                       </div>
       
        );
      };
}

export default withRouter(withStyles(styles)(Login));
