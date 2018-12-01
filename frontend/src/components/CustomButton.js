import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import cyan from '@material-ui/core/colors/cyan';
import yellow from '@material-ui/core/colors/yellow';


const styles = theme => ({
  container: {
    display: 'flexbox',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  cssRoot: {
    color: theme.palette.getContrastText(cyan[500]),
    width:'350px',
    height: '35px',
    backgroundColor: cyan[500],
    '&:hover': {
      backgroundColor: yellow[700],
    },
  },
  bootstrapRoot: {
   
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    backgroundColor: '#007bff',
    borderColor: '#007bff',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
});


function CustomButton(props) {
  const { classes } = props;

  return (
    <div className={classes.container}>
      <Button
        variant="contained"
        color="primary"
        className={classNames(classes.margin, classes.cssRoot)}
      >
        {props.name}
      </Button>
    </div>
  );
}

CustomButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomButton);