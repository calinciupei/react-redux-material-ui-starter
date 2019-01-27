import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const headerLinksStyle = theme => {
  const listItemLinks = {
    float: 'left',
    color: 'inherit',
    position: 'relative',
    display: 'block',
    width: 'auto',
    margin: '0',
    padding: '0',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      '&:after': {
        width: 'calc(100% - 30px)',
        content: '',
        display: 'block',
        height: '1px',
        marginLeft: '15px',
        backgroundColor: '#e5e5e5'
      }
    }
  };

  return {
    list: {
      margin: 0,
      paddingLeft: '0',
      listStyle: 'none',
      paddingTop: '0',
      paddingBottom: '0',
      color: 'inherit'
    },
    listItem: { ...listItemLinks },
    listItemButton: {
      ...listItemLinks,
      marginLeft: '10px'
    }
  };
};

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

export default withStyles(headerLinksStyle)(NavMenu);
