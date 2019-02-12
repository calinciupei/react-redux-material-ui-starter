import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

// style
import navMenuStyle from '../../style/matrial-styles/components/navMenu';

class NavMenu extends Component {
  render () {
    const { classes } = this.props;
    return (
      <div className='navigation'>
        <div className='nav-menu'>
          <List className={classes.list}>
            <ListItem className={classes.listItem}>
              <Button href='/'>Menu 1</Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button href='about'>Menu 2</Button>
            </ListItem>
            <ListItem className={classes.listItemButton}>
              <Button
                color='primary'
                variant='outlined'
                className='flatPrimary'
              >
                Sign In
              </Button>
            </ListItem>
            <ListItem className={classes.listItemButton}>
              <Button color='primary' variant='contained'>
                Sign Up
              </Button>
            </ListItem>
          </List>
        </div>
      </div>
    );
  }
}

NavMenu.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(navMenuStyle)(NavMenu);
