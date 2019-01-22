import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

// components
import Button from '@material-ui/core/Button';

class AboutUs extends Component {
    render() {
        return (
            <div>
                <div>AboutUs Component</div>
                <Button variant="contained" color="primary">
                    In Progress
                </Button>
            </div>
        )
    }
}

AboutUs.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect((state) => ({
    aboutUs: state.aboutUs,
}))(AboutUs);