/**
 *
 * Dashboard
 *
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectDashboard from './selectors';
import reducer from './reducer';
import saga from './saga';
import itemProducts from './partial/items';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import CarouselMulti from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import messages from './messages';
// https://www.npmjs.com/package/react-responsive-carousel

export function Dashboard(props, { activeItemIndex = '0' }) {
  useInjectReducer({ key: 'dashboard', reducer });
  useInjectSaga({ key: 'dashboard', saga });
  useEffect(() => {
    // When initial state
  }, []);

  return (
    <div>
      <Helmet>
        <title>Dashboard</title>
        <meta name="description" content="Description of Dashboard" />
      </Helmet>
      {/* {activeItemIndex+''+props.dashboard.activeItemIndex1} */}
      {/* <FormattedMessage {...messages.header} /> */}
      <div
        className="row"
        style={{
          paddingBottom: '1%',
          borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* Dashboard */}
        <div className="col-2" style={{ textAlign: 'center' }}>
          <img
            className="_396cs4 _3exPp9"
            alt="Top Offers"
            src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100"
          />
          <div>Top Offers</div>
        </div>
        <div className="col-2" style={{ textAlign: 'center' }}>
          <img
            className="_396cs4 _3exPp9"
            alt="Books"
            src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"
          />
          <div>Books</div>
        </div>
        <div className="col-2" style={{ textAlign: 'center' }}>
          <img
            className="_396cs4 _3exPp9"
            alt="Nootebook"
            src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100"
          />
          <div>Nootebook</div>
        </div>
        <div className="col-2" style={{ textAlign: 'center' }}>
          <img
            className="_396cs4 _3exPp9"
            alt="Nootebook"
            src="https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100"
          />
          <div>Top Offers</div>
        </div>
        <div className="col-2" style={{ textAlign: 'center' }}>
          <img
            className="_396cs4 _3exPp9"
            alt="Tools & Accessories"
            src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100"
          />
          <div>Tools & Accessories</div>
        </div>
        <div className="col-2" style={{ textAlign: 'center' }}>
          <img
            className="_396cs4 _3exPp9"
            alt="stationery"
            src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100"
          />
          <div>stationery</div>
        </div>
      </div>

      <div className="row" style={{ padding: '2%' }}>
        {/* <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}> */}
        <Carousel showThumbs={false}>
          <div>
            <img src="https://rukminim1.flixcart.com/flap/844/140/image/7b4c400702a79909.jpg?q=50" />
            {/* <p className="legend">Legend 1</p> */}
          </div>
          <div>
            {/* <img src="http://react-responsive-carousel.js.org/assets/2.jpeg" /> */}
            <img src="https://rukminim1.flixcart.com/flap/844/140/image/7b4c400702a79909.jpg?q=50" />
            {/* <p className="legend">Legend 2</p> */}
          </div>
          <div>
            <img src="https://rukminim1.flixcart.com/flap/844/140/image/7b4c400702a79909.jpg?q=50" />
            {/* <p className="legend">Legend 3</p> */}
          </div>
        </Carousel>
      </div>

      <div>{itemProducts()}</div>
    </div>
  );
}

Dashboard.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  dashboard: makeSelectDashboard(),
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
)(Dashboard);
