import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

// components
import Jumbotron from '../../components/jumbotron/jumbotron.component';
import SectionOne from '../../components/sectionOne/sectionOne.component';
import SectionTwo from '../../components/sectionTwo/sectionTwo.component';
import SectionThree from '../../components/sectionThree/sectionThree.component';
import SectionFour from '../../components/sectionFour/sectionFour.component';
import SectionFive from '../../components/sectionFive/sectionFive.component';

class HomePage extends Component {
  state = {
    dependenciesLoaded: false
  };

  componentWillMount () {
    this.setState({ dependenciesLoaded: true });
  }

  componentWillReceiveProps () {}

  renderJumbotron () {
    return <Jumbotron />;
  }

  render () {
    return (
      <Fragment>
        {this.renderJumbotron()}
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
      </Fragment>
    );
  }
}

HomePage.propTypes = {};

export default connect(state => ({
  homePage: state.homePage
}))(HomePage);
