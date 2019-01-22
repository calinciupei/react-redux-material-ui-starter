import React, { Component } from 'react';
import { Grid, Typography, withStyles } from '@material-ui/core';

// style
import sectionStyle from '../../style/matrial-styles/components/section';

class SectionFour extends Component {
    render() {
        const {classes} = this.props;
        
        return (
            <Grid className={classes.section} container direction="row" justify="space-between" alignItems="center">
                <Grid item xs={12} className={classes.sectionHeader}>
                    <Typography variant="h3" component="h3">
                        <b>Section Four</b>
                    </Typography>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(sectionStyle)(SectionFour);