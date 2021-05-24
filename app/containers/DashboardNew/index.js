/**
 *
 * DashboardNew
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import Carousel from 'react-hook-carousel';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectDashboardNew from './selectors';
import reducer from './reducer';
import saga from './saga';
import './dashboard.css';
// import messages from './messages';

export function DashboardNew() {
  useInjectReducer({ key: 'dashboardNew', reducer });
  useInjectSaga({ key: 'dashboardNew', saga });

  const slider = [
    {
      image: 'https://img8.hkrtcdn.com/14672/bnr_1467107_o.jpg',
      alt: 'alt image1',
    },
    {
      image: 'https://img4.hkrtcdn.com/14672/bnr_1467103_o.jpg',
      alt: 'alt image2',
    },
  ];

  const sliders = [
    {
      image:
        'https://venustradersonline.com/4012-thickbox_default/hp-ink-cartridge-685-cyan.jpg',
      alt: 'alt image1',
    },
    {
      image:
        'https://rukminim1.flixcart.com/image/832/832/k1118cw0/pencil/h/m/g/absolute-pencils-apsara-original-imafkpayztq4xjyp.jpeg?q=70',
      alt: 'alt image2',
    },
    {
      image:
        'https://rukminim1.flixcart.com/image/832/832/k1118cw0/pencil/w/c/z/triga-pencils-apsara-original-imafkpaazah6cham.jpeg?q=70',
      alt: 'alt image3',
    },
    {
      image:
        'https://rukminim1.flixcart.com/image/832/832/knni7ww0/pencil/y/2/c/gem-flair-creative-original-imag2ajewpnnen8g.jpeg?q=70',
      alt: 'alt image4',
    },
    {
      image:
        'https://rukminim1.flixcart.com/image/832/832/kebpqq80/diary-notebook/s/r/h/classmate-02105012-original-imafvf9aeb94tb78.jpeg?q=70',
      alt: 'alt image5',
    },
    {
      image:
        'https://venustradersonline.com/4012-thickbox_default/hp-ink-cartridge-685-cyan.jpg',
      alt: 'alt image1',
    },
    {
      image:
        'https://rukminim1.flixcart.com/image/832/832/k1118cw0/pencil/h/m/g/absolute-pencils-apsara-original-imafkpayztq4xjyp.jpeg?q=70',
      alt: 'alt image2',
    },
    {
      image:
        'https://rukminim1.flixcart.com/image/832/832/k1118cw0/pencil/w/c/z/triga-pencils-apsara-original-imafkpaazah6cham.jpeg?q=70',
      alt: 'alt image3',
    },
    {
      image:
        'https://rukminim1.flixcart.com/image/832/832/knni7ww0/pencil/y/2/c/gem-flair-creative-original-imag2ajewpnnen8g.jpeg?q=70',
      alt: 'alt image4',
    },
    {
      image:
        'https://rukminim1.flixcart.com/image/832/832/kebpqq80/diary-notebook/s/r/h/classmate-02105012-original-imafvf9aeb94tb78.jpeg?q=70',
      alt: 'alt image5',
    },
    {
      image:
        'https://rukminim1.flixcart.com/image/832/832/knni7ww0/pencil/y/2/c/gem-flair-creative-original-imag2ajewpnnen8g.jpeg?q=70',
      alt: 'alt image4',
    },
    {
      image:
        'https://rukminim1.flixcart.com/image/832/832/kebpqq80/diary-notebook/s/r/h/classmate-02105012-original-imafvf9aeb94tb78.jpeg?q=70',
      alt: 'alt image5',
    },
  ];

  return (
    <div>
      <Helmet>
        <title>DashboardNew</title>
        <meta name="description" content="Description of DashboardNew" />
      </Helmet>
      {/* <FormattedMessage {...messages.header} /> */}

      <div>
        <Carousel items={slider} groupBy={false} showDots showButton />
      </div>
      <div style={{ borderTop: '5px solid #d3d3d3' }}>
        <h3>Deals of the Day</h3>
      </div>
      <div id="div1">
        <Carousel items={sliders} groupBy={5} showButton />
      </div>
      <div style={{ borderTop: '5px solid #d3d3d3' }}>
        <h3>Best Items</h3>
      </div>
      <div id="div2">
        <Carousel items={sliders} groupBy={5} showButton />
      </div>
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
