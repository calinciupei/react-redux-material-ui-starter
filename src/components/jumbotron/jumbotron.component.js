import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { TextField, Grid, Typography, Button } from '@material-ui/core';

// style
import jumbotronStyle from '../../style/matrial-styles/components/jumbotron';

class Jumbotron extends Component {
    state = {
        name: 'Email',
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render () {
        const {classes} = this.props;

        return (
            <Grid container direction="row" justify="center" alignItems="center" className={classes.jumbotron}>
                <Grid item xs={12}>
                    Jumbotron
                </Grid>
            </Grid>
        );
    }
} 

export default withStyles(jumbotronStyle)(Jumbotron);