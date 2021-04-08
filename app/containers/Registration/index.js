/**
 *
 * Registration
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import '../../styles/loginSignUp.css';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectRegistration from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function Registration() {
  useInjectReducer({ key: 'registration', reducer });
  useInjectSaga({ key: 'registration', saga });

  // return (
  //   <div>
  //     <Helmet>
  //       <title>Registration</title>
  //       <meta name="description" content="Description of Registration" />
  //     </Helmet>
  //     <FormattedMessage {...messages.header} />
  //   </div>
  // );
  return (
    <form className="form">
        <h3>Register</h3>

        <div className="form-group">
            <label>First name</label>
            <input type="text" className="form-control" placeholder="First name" />
        </div>

        <div className="form-group">
            <label>Last name</label>
            <input type="text" className="form-control" placeholder="Last name" />
        </div>

        <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" placeholder="Enter email" />
        </div>

        <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter password" />
        </div>

        <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
        <p className="forgot-password text-right">
            Already registered <a href="#">log in?</a>
        </p>
    </form>
);
}

Registration.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  registration: makeSelectRegistration(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Registration);
