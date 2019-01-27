import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getDependencySuccess } from './initApp.actions';

class InitApp extends Component {
  state = {
    ready: false
  };

  componentWillMount () {
    this.setState({ ready: true });
  }

  componentWillReceiveProps () {
    this.props.dispatch(getDependencySuccess());
  }

  render () {
    if (this.state.ready) {
      return <Fragment>{this.props.children}</Fragment>;
    } else {
      return <Fragment>Error!!!</Fragment>;
    }
  }
}

InitApp.propTypes = {
  children: PropTypes.node,
  dispatch: PropTypes.func.isRequired,
};

export default connect(state => ({
  initApp: state.initApp
}))(InitApp);
