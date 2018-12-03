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

const containerStyle = {
    background: '#9adcfb',
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
        padding: '20px'
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
           user: JSON.parse(localStorage.getItem('user'))
       }
   }

   componentDidMount() {
    this.setState({user: JSON.parse(localStorage.getItem('user'))});
    var payload = {
        username: this.state.user.username
    };
    axios.post('http://localhost:3000/api/pet/getPetsByOwnerUsername', 
        payload
      )
      .then(res => {
          console.log(res.data);
        this.setState({pets: res.data.data});
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
  <Card className={classes.card} class="col-md-6 col-md-offset-3">
  <CardActionArea>
    <CardMedia
      component="img"
      alt={pet.name}
      className={classes.media}
      height="1080"
      image={pet.photoId}
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