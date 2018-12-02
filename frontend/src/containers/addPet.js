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

  

class addPet extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            type: "",
            species: "",
            gender:"",
            offer:"",
            price: "",
            age: "",
            contact: "",
            selectedFile: null,
            user: JSON.parse(localStorage.getItem('user'))
        };
        console.log(JSON.parse(localStorage.getItem('user')));

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        if(event.target.getAttribute("id") === "name"){
            this.setState({name: event.target.value});
        }
        if(event.target.getAttribute("id") === "type"){
            this.setState({type: event.target.value});
        }
        if(event.target.getAttribute("id") === "species"){
            this.setState({species: event.target.value});
        }
        if(event.target.getAttribute("id") === "gender"){
            this.setState({gender: event.target.value});
        }
        if(event.target.getAttribute("id") === "offer"){
            this.setState({offer: event.target.value});
        }
        if(event.target.getAttribute("id") === "price"){
            this.setState({price: event.target.value});
        }
        if(event.target.getAttribute("id") === "age"){
            this.setState({age: event.target.value});
            console.log(this.state.age);
        }

        if(event.target.getAttribute("id") === "contact"){
            this.setState({contact: event.target.value});
        }
        
      }
    
      handleSubmit(event) {
          
        var petInfo = {
        ownerUsername: this.state.user.username,
        ownerMobileNumber: this.state.contact,
        name: this.state.name,
        type: this.state.type,
        species: this.state.species,
        gender: this.state.gender,
        offer: this.state.offer,
        price: this.state.price,
        age: this.state.age,
        photoId: ""
        };

        petInfo.photoId = petInfo.ownerUsername.concat(petInfo.name);

        axios.post('http://localhost:3000/api/pet/addPet', petInfo )
        .then(function (response) {
        console.log(response);
        if(response.status === 200){
        console.log("Pet added successfully");
        }
    })
    .catch(function (error) {
        console.log(error);
    });

        this.props.history.replace({pathname: '/Home'});
        event.preventDefault();
      }

      fileChangedHandler = (event) => {
        this.setState({selectedFile: event.target.files[0]})
      }

      uploadHandler = () => {
        var petInfo = {
            ownerUsername: this.state.user.username,
            ownerMobileNumber: this.state.contact,
            name: this.state.name,
            type: this.state.type,
            species: this.state.species,
            gender: this.state.gender,
            offer: this.state.offer,
            price: this.state.price,
            age: this.state.age,
            photoId: ""
            };
            
            petInfo.photoId = petInfo.ownerUsername.concat(petInfo.name);
            console.log(petInfo);
        const formData = new FormData();
        formData.append('Image', this.state.selectedFile);
        axios.post('http://localhost:3000/api/photoId', {photoId: petInfo.photoId })
        axios.post('http://localhost:3000/api/sendImage', formData);
      }

      render() {
        
        const { classes } = this.props;
        
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
                    id="name"
                    label="Name"
                    placeholder="Name"
                    className={classes.textField}
                    margin="normal"
                 />
                  <TextField
                    required
                    onChange={this.handleChange}
                    id="type"
                    label="Type"
                    placeholder="Type"
                    className={classes.textField}
                    margin="normal"
                 />
                  <TextField
                    required
                    onChange={this.handleChange}
                    id="species"
                    label="Species"
                    placeholder="Species"
                    className={classes.textField}
                    margin="normal"
                 />
                  <TextField
                    required
                    onChange={this.handleChange}
                    id="gender"
                    label="Gender"
                    placeholder="Gender"
                    className={classes.textField}
                    margin="normal"
                 />
                  <TextField
                    required
                    onChange={this.handleChange}
                    id="offer"
                    label="Offer"
                    placeholder="Offer"
                    className={classes.textField}
                    margin="normal"
                 />
                  <TextField
                    required
                    onChange={this.handleChange}
                    id="price"
                    label="Price"
                    placeholder="Price"
                    className={classes.textField}
                    margin="normal"
                 />
                  <TextField
                    required
                    onChange={this.handleChange}
                    id="age"
                    label="Age"
                    placeholder="Age"
                    className={classes.textField}
                    margin="normal"
                 />
                 <TextField
                    required
                    onChange={this.handleChange}
                    id="contact"
                    label="Contact"
                    placeholder="Contact"
                    className={classes.textField}
                    margin="normal"
                 />
                 <input type="file" onChange={this.fileChangedHandler}/>
                 <CustomButton name="Upload Photo" onClick={this.uploadHandler}/>

          </form>
             <CustomButton name="Submit" onClick={this.handleSubmit}/>
        </div>
         
        );
      };
}

export default withStyles(styles)(addPet);