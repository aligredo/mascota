import React , { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import logo from "../mascota.png";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CustomButton from '../components/CustomButton'



const containerStyle = {
    background: '#fff7b0'
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



class Home extends Component{
   constructor(props){
       super(props);
       this.state = {
           pets: [],
           user:{}
       }
   }

   postSelectedHandler = (event) => {
    this.props.history.push({pathname: '/Profile'});
}

   componentDidMount() {
    this.setState({user: localStorage.getItem("user")});
    var link = "http://localhost:3005/api".concat('/pet/getAllPets');
    axios.get(link)
      .then(res => {
        console.log(res.data.data);
        this.setState({pets: res.data.data});
      })
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
      <Typography component="p">
       Owner: {pet.ownerUsername}, 
       Contact: {pet.ownerMobileNumber}
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
        <CustomButton name="Profile" onClick={this.postSelectedHandler}/>
        {petCards}
        </div>
   
    );
  };
}

export default withStyles(styles)(Home);