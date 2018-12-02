import React , { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import logo from "../mascota.png";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CustomButon from '../components/CustomButton';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const containerStyle = {
    background: '#9adcfb'
};

const styles = theme => ({
    container: {
        display: 'flexbox',
        flexWrap: 'wrap',
        height: '49vh'
    },
    dense: {
        marginTop: 19
    },
    menu: {
        width: 200
    },
    card: {
        maxWidth: 345,
      },
      media: {
        // ⚠️ object-fit is not supported by IE 11.
        objectFit: 'cover',
      },
});



class Profile extends Component{
   constructor(props){
       super(props);
       this.state = {
           pets: [],
           user:{}
       }
   }

   componentDidMount() {
    this.setState({user: localStorage.getItem("user")});
    axios.get('http://localhost:3000/api/pet/getPetsByOwnerUsername/:')
      .then(res => {
        this.setState({pets: res.data.data});
      })
  }

  onClick(event){
    axios.delete('http://localhost:3000/api/pet/deletePet', {
        name: event.target.getAttribute("id"),
        ownerUsername: this.state.user.username
    })
    .then(res => {
     this.forceUpdate();
    })
  }

  postSelectedHandler = (event) => {
    this.props.history.push({pathname: '/addPet'});
}

postSelectedHandlerH = (event) => {
    this.props.history.push({pathname: '/Home'});
}
   render() {
    const { classes } = this.props;
    let petCards = this.state.pets.map((pet) => 
  <Card className={classes.card}>
  <CardActionArea>
    <CardMedia
      component="img"
      alt={pet.name}
      className={classes.media}
      height="140"
      image={pet.imageId}
      title={pet.name}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
        {pet.name}
      </Typography>
      <Typography component="p">
       {pet.type}, {pet.species}, {pet.age}, {pet.gender}, {pet.offer}, {pet.price}.
      </Typography>
    </CardContent>
    <CardActions>
        <Button size="small" color="secondary" onClick={this.onClick} id={pet.name}>
          Delete
        </Button>
      </CardActions>
  </CardActionArea>
</Card>

  );
    return (
        <div style={containerStyle} >
        <header>
            <img src={logo} className="App-logo" alt="logo"/>
            <h1 className = "mascota">
                <code>Mascota</code>
            </h1>
        </header>
        <CustomButon name="Add Pet" onClick={this.postSelectedHandler}/>
        <CustomButon name="Home" onClick={this.postSelectedHandlerH}/>
        {petCards}
        </div>
   
    );
  };
}

export default withStyles(styles)(Profile);