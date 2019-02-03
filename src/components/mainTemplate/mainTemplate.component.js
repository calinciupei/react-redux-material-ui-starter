import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';

import HeaderBar from '../headerBar/headerBar.component';
import FooterBar from '../footerBar/footerBar.component';

import theme from '../../style/matrial-styles/theme';
import { container } from '../../style/matrial-styles/material.style';
/**
 * <MainTemplate />
 *
 * High order component that will render app template with its specific sections.
 */

const mainStyle = () => ({ container });

class MainTemplate extends Component {
  render () {
    const { children, classes } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <HeaderBar />
        <div className={classes.container}>{children}</div>
        <FooterBar />
      </MuiThemeProvider>
    );
  }
}

MainTemplate.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object,
};

export default withStyles(mainStyle, { withStyles: true })(MainTemplate);
