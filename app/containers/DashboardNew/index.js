/**
 *
 * DashboardNew
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectDashboardNew from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function DashboardNew() {
  useInjectReducer({ key: 'dashboardNew', reducer });
  useInjectSaga({ key: 'dashboardNew', saga });

  return (
    <div>
      <Helmet>
        <title>DashboardNew</title>
        <meta name="description" content="Description of DashboardNew" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

DashboardNew.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  dashboardNew: makeSelectDashboardNew(),
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
)(DashboardNew);
