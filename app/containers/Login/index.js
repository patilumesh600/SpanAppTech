/**
 *
 * Login
 *
 */

import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';
import '../../styles/loginSignUp.css';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';

// import { login } from './actions';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import * as loginActions from './actions';
import makeSelectLogin from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function Login(props) {
  useInjectReducer({ key: 'login', reducer });
  useInjectSaga({ key: 'login', saga });

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleUserNameChange = e => setUserName(e.target.value);
  const handlePasswaordChange = e => setPassword(e.target.value);
  const handleOnLogin = (e, userName, password) => {
    e.stopPropagation();
    e.preventDefault();
    props.actions.login(userName, password);
  };

  // return (
  //   <div>
  //     <Helmet>
  //       <title>Login</title>
  //       <meta name="description" content="Description of Login" />
  //     </Helmet>
  //     <FormattedMessage {...messages.header} />
  //   </div>
  // );

  return (
    <form className="form" style={{ marginTop: '8%' }}>
      <h3>Log in</h3>

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          onChange={handleUserNameChange}
          value={userName}
          className="form-control"
          placeholder="Enter email"
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          onChange={handlePasswaordChange}
          value={password}
          className="form-control"
          placeholder="Enter password"
        />
      </div>

      <div className="form-group">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>

      <button
        type="submit"
        onClick={e => handleOnLogin(e, userName, password)}
        className="btn btn-dark btn-lg btn-block"
      >
        Sign in
      </button>
      <p className="forgot-password text-right">
        Forgot <a href="#">password?</a>
      </p>
    </form>
  );
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  actions: bindActionCreators({ ...loginActions }, dispatch),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Login);
