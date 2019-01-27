import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

// style
import jumbotronStyle from '../../style/matrial-styles/components/jumbotron';

class Jumbotron extends Component {
  state = {
    name: 'Email'
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render () {
    const { classes } = this.props;

    return (
      <Grid
        container
        direction='row'
        justify='center'
        alignItems='center'
        className={classes.jumbotron}
      >
        <Grid item xs={12}>
          Jumbotron
        </Grid>
      </Grid>
    );
  }
}

Jumbotron.propTypes = {
  classes: PropTypes.any,
};

export default withStyles(jumbotronStyle)(Jumbotron);
