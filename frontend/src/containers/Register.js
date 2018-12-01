import React, { Component } from 'react';

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
        }
    }
}

export default Register;