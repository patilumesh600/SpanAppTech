/* eslint-disable jsx-a11y/alt-text */
/**
 *
 * DashboardNew
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import Carousel from 'react-hook-carousel';
import CarouselNew from 'react-multi-carousel';
// https://www.npmjs.com/package/react-multi-carousel
// https://react-multi-carousel.vercel.app/
import 'react-multi-carousel/lib/styles.css';

import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectDashboardNew from './selectors';
import reducer from './reducer';
import saga from './saga';
import './dashboard.css';

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// import Slider from 'react-slick';
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

  // const sliders = [
  //   {
  //     image:
  //       'https://venustradersonline.com/4012-thickbox_default/hp-ink-cartridge-685-cyan.jpg',
  //     alt: 'alt image1',
  //   },
  //   {
  //     image:
  //       'https://rukminim1.flixcart.com/image/832/832/k1118cw0/pencil/h/m/g/absolute-pencils-apsara-original-imafkpayztq4xjyp.jpeg?q=70',
  //     alt: 'alt image2',
  //   },
  //   {
  //     image:
  //       'https://rukminim1.flixcart.com/image/832/832/k1118cw0/pencil/w/c/z/triga-pencils-apsara-original-imafkpaazah6cham.jpeg?q=70',
  //     alt: 'alt image3',
  //   },
  //   {
  //     image:
  //       'https://rukminim1.flixcart.com/image/832/832/knni7ww0/pencil/y/2/c/gem-flair-creative-original-imag2ajewpnnen8g.jpeg?q=70',
  //     alt: 'alt image4',
  //   },
  //   {
  //     image:
  //       'https://rukminim1.flixcart.com/image/832/832/kebpqq80/diary-notebook/s/r/h/classmate-02105012-original-imafvf9aeb94tb78.jpeg?q=70',
  //     alt: 'alt image5',
  //   },
  //   {
  //     image:
  //       'https://venustradersonline.com/4012-thickbox_default/hp-ink-cartridge-685-cyan.jpg',
  //     alt: 'alt image1',
  //   },
  //   {
  //     image:
  //       'https://rukminim1.flixcart.com/image/832/832/k1118cw0/pencil/h/m/g/absolute-pencils-apsara-original-imafkpayztq4xjyp.jpeg?q=70',
  //     alt: 'alt image2',
  //   },
  //   {
  //     image:
  //       'https://rukminim1.flixcart.com/image/832/832/k1118cw0/pencil/w/c/z/triga-pencils-apsara-original-imafkpaazah6cham.jpeg?q=70',
  //     alt: 'alt image3',
  //   },
  //   {
  //     image:
  //       'https://rukminim1.flixcart.com/image/832/832/knni7ww0/pencil/y/2/c/gem-flair-creative-original-imag2ajewpnnen8g.jpeg?q=70',
  //     alt: 'alt image4',
  //   },
  //   {
  //     image:
  //       'https://rukminim1.flixcart.com/image/832/832/kebpqq80/diary-notebook/s/r/h/classmate-02105012-original-imafvf9aeb94tb78.jpeg?q=70',
  //     alt: 'alt image5',
  //   },
  //   {
  //     image:
  //       'https://rukminim1.flixcart.com/image/832/832/knni7ww0/pencil/y/2/c/gem-flair-creative-original-imag2ajewpnnen8g.jpeg?q=70',
  //     alt: 'alt image4',
  //   },
  //   {
  //     image:
  //       'https://rukminim1.flixcart.com/image/832/832/kebpqq80/diary-notebook/s/r/h/classmate-02105012-original-imafvf9aeb94tb78.jpeg?q=70',
  //     alt: 'alt image5',
  //   },
  // ];

  // const settings = {
  //   dots: false,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 4,
  //   initialSlide: 0,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="col-md-12" style={{ padding: '0px' }}>
      <Helmet>
        <title>DashboardNew</title>
        <meta name="description" content="Description of DashboardNew" />
      </Helmet>

      <div id="dashCarousel">
        <Carousel items={slider} groupBy={false} showDots showButton />
      </div>
      <div style={{ margin: '1%' }}>
        <h3>Deals of the Day</h3>
      </div>
      <div className="col-md-12">
        {/* <Carousel items={sliders} groupBy={5} showButton /> */}

        {/* <Slider {...settings} style={{ margin: '0px', textAlign: 'center' }}>
          <div>
            <img
              height="150px"
              src="https://venustradersonline.com/4012-thickbox_default/hp-ink-cartridge-685-cyan.jpg"
            />
            <div>
              Product name
              <br />
              <span itemProp="price" className="price product-price">
                {' '}
                ₹ 580.00{' '}
              </span>
            </div>
          </div>
          <div>
            <img
              height="150px"
              src="https://rukminim1.flixcart.com/image/832/832/k1118cw0/pencil/h/m/g/absolute-pencils-apsara-original-imafkpayztq4xjyp.jpeg?q=70"
            />
            <div>
              Product name
              <br />
              <span itemProp="price" className="price product-price">
                {' '}
                ₹ 580.00{' '}
              </span>
            </div>
          </div>
          <div>
            <img
              height="150px"
              src="https://rukminim1.flixcart.com/image/832/832/k1118cw0/pencil/w/c/z/triga-pencils-apsara-original-imafkpaazah6cham.jpeg?q=70"
            />
            <div>
              Product name
              <br />
              <span itemProp="price" className="price product-price">
                {' '}
                ₹ 580.00{' '}
              </span>
            </div>
          </div>
          <div>
            <img
              height="150px"
              src="https://rukminim1.flixcart.com/image/832/832/knni7ww0/pencil/y/2/c/gem-flair-creative-original-imag2ajewpnnen8g.jpeg?q=70"
            />
            <div>
              Product name
              <br />
              <span itemProp="price" className="price product-price">
                {' '}
                ₹ 580.00{' '}
              </span>
            </div>
          </div>
          <div>
            <img
              height="150px"
              src="https://rukminim1.flixcart.com/image/832/832/kebpqq80/diary-notebook/s/r/h/classmate-02105012-original-imafvf9aeb94tb78.jpeg?q=70"
            />
            <div>
              Product name
              <br />
              <span itemProp="price" className="price product-price">
                {' '}
                ₹ 580.00{' '}
              </span>
            </div>
          </div>
          <div>
            <img
              height="150px"
              src="https://venustradersonline.com/4012-thickbox_default/hp-ink-cartridge-685-cyan.jpg"
            />
            <div>
              Product name
              <br />
              <span itemProp="price" className="price product-price">
                {' '}
                ₹ 580.00{' '}
              </span>
            </div>
          </div>
          <div>
            <img
              height="150px"
              src="https://rukminim1.flixcart.com/image/832/832/k1118cw0/pencil/h/m/g/absolute-pencils-apsara-original-imafkpayztq4xjyp.jpeg?q=70"
            />
            <div>
              Product name
              <br />
              <span itemProp="price" className="price product-price">
                {' '}
                ₹ 580.00{' '}
              </span>
            </div>
          </div>
          <div>
            <img
              height="150px"
              src="https://rukminim1.flixcart.com/image/832/832/k1118cw0/pencil/w/c/z/triga-pencils-apsara-original-imafkpaazah6cham.jpeg?q=70"
            />
            <div>
              Product name
              <br />
              <span itemProp="price" className="price product-price">
                {' '}
                ₹ 580.00{' '}
              </span>
            </div>
          </div>
        </Slider> */}

        <CarouselNew responsive={responsive}>
          <div className="text-center">
            <img
              height="150px"
              src="https://venustradersonline.com/4012-thickbox_default/hp-ink-cartridge-685-cyan.jpg"
            />
            <div>
              Product name
              <br />
              <span itemProp="price" className="price product-price">
                {' '}
                ₹ 580.00{' '}
              </span>
            </div>
          </div>
          <div className="text-center">
            <img
              height="150px"
              src="https://venustradersonline.com/4012-thickbox_default/hp-ink-cartridge-685-cyan.jpg"
            />
            <div>
              Product name
              <br />
              <span itemProp="price" className="price product-price">
                {' '}
                ₹ 580.00{' '}
              </span>
            </div>
          </div>
          <div className="text-center">
            <img
              height="150px"
              src="https://venustradersonline.com/4012-thickbox_default/hp-ink-cartridge-685-cyan.jpg"
            />
            <div>
              Product name
              <br />
              <span itemProp="price" className="price product-price">
                {' '}
                ₹ 580.00{' '}
              </span>
            </div>
          </div>
          <div className="text-center">
            <img
              height="150px"
              src="https://venustradersonline.com/4012-thickbox_default/hp-ink-cartridge-685-cyan.jpg"
            />
            <div>
              Product name
              <br />
              <span itemProp="price" className="price product-price">
                {' '}
                ₹ 580.00{' '}
              </span>
            </div>
          </div>
          <div className="text-center">
            <img
              height="150px"
              src="https://venustradersonline.com/4012-thickbox_default/hp-ink-cartridge-685-cyan.jpg"
            />
            <div>
              Product name
              <br />
              <span itemProp="price" className="price product-price">
                {' '}
                ₹ 580.00{' '}
              </span>
            </div>
          </div>
          <div className="text-center">
            <img
              height="150px"
              src="https://venustradersonline.com/4012-thickbox_default/hp-ink-cartridge-685-cyan.jpg"
            />
            <div>
              Product name
              <br />
              <span itemProp="price" className="price product-price">
                {' '}
                ₹ 580.00{' '}
              </span>
            </div>
          </div>
          <div className="text-center">
            <img
              height="150px"
              src="https://venustradersonline.com/4012-thickbox_default/hp-ink-cartridge-685-cyan.jpg"
            />
            <div>
              Product name
              <br />
              <span itemProp="price" className="price product-price">
                {' '}
                ₹ 580.00{' '}
              </span>
            </div>
          </div>
          <div className="text-center">
            <img
              height="150px"
              src="https://venustradersonline.com/4012-thickbox_default/hp-ink-cartridge-685-cyan.jpg"
            />
            <div>
              Product name
              <br />
              <span itemProp="price" className="price product-price">
                {' '}
                ₹ 580.00{' '}
              </span>
            </div>
          </div>
        </CarouselNew>
      </div>
      <div
        style={{
          borderTop: '1px solid rgb(79, 159, 207)',
          margin: '1%',
          paddingTop: '1%',
        }}
      >
        <h3>Best Items</h3>
      </div>
      <div style={{ paddingBottom: '3%', width: '100%' }}>
        {/* <Slider {...settings} style={{ textAlign: 'center' }}>
          <div>
            <img
              height="150px"
              width="100%"
              src="https://venustradersonline.com/4012-thickbox_default/hp-ink-cartridge-685-cyan.jpg"
            />
            <div>
              Product name
              <br />
              <span itemProp="price" className="price product-price">
                {' '}
                ₹ 580.00{' '}
              </span>
            </div>
          </div>
          <div>
            <img
              height="150px"
              src="https://rukminim1.flixcart.com/image/832/832/k1118cw0/pencil/h/m/g/absolute-pencils-apsara-original-imafkpayztq4xjyp.jpeg?q=70"
            />
            <div>
              Product name
              <br />
              <span itemProp="price" className="price product-price">
                {' '}
                ₹ 580.00{' '}
              </span>
            </div>
          </div>
          <div>
            <img
              height="150px"
              src="https://rukminim1.flixcart.com/image/832/832/k1118cw0/pencil/w/c/z/triga-pencils-apsara-original-imafkpaazah6cham.jpeg?q=70"
            />
            <div>
              Product name
              <br />
              <span itemProp="price" className="price product-price">
                {' '}
                ₹ 580.00{' '}
              </span>
            </div>
          </div>
          <div>
            <img
              height="150px"
              src="https://rukminim1.flixcart.com/image/832/832/knni7ww0/pencil/y/2/c/gem-flair-creative-original-imag2ajewpnnen8g.jpeg?q=70"
            />
            <div>
              Product name
              <br />
              <span itemProp="price" className="price product-price">
                {' '}
                ₹ 580.00{' '}
              </span>
            </div>
          </div>
          <div>
            <img
              height="150px"
              src="https://rukminim1.flixcart.com/image/832/832/kebpqq80/diary-notebook/s/r/h/classmate-02105012-original-imafvf9aeb94tb78.jpeg?q=70"
            />
            <div>
              Product name
              <br />
              <span itemProp="price" className="price product-price">
                {' '}
                ₹ 580.00{' '}
              </span>
            </div>
          </div>
          <div>
            <img
              height="150px"
              src="https://venustradersonline.com/4012-thickbox_default/hp-ink-cartridge-685-cyan.jpg"
            />
            <div>
              Product name
              <br />
              <span itemProp="price" className="price product-price">
                {' '}
                ₹ 580.00{' '}
              </span>
            </div>
          </div>
          <div>
            <img
              height="150px"
              src="https://rukminim1.flixcart.com/image/832/832/k1118cw0/pencil/h/m/g/absolute-pencils-apsara-original-imafkpayztq4xjyp.jpeg?q=70"
            />
            <div>
              Product name
              <br />
              <span itemProp="price" className="price product-price">
                {' '}
                ₹ 580.00{' '}
              </span>
            </div>
          </div>
          <div>
            <img
              height="150px"
              src="https://rukminim1.flixcart.com/image/832/832/k1118cw0/pencil/w/c/z/triga-pencils-apsara-original-imafkpaazah6cham.jpeg?q=70"
            />
            <div>
              Product name
              <br />
              <span itemProp="price" className="price product-price">
                {' '}
                ₹ 580.00{' '}
              </span>
            </div>
          </div>
        </Slider> */}

        <CarouselNew responsive={responsive}>
          <div className="text-center">
            <img
              height="150px"
              src="https://venustradersonline.com/4012-thickbox_default/hp-ink-cartridge-685-cyan.jpg"
            />
            <div>
              Product name
              <br />
              <span itemProp="price" className="price product-price">
                {' '}
                ₹ 580.00{' '}
              </span>
            </div>
          </div>
          <div className="text-center">
            <img
              height="150px"
              src="https://venustradersonline.com/4012-thickbox_default/hp-ink-cartridge-685-cyan.jpg"
            />
            <div>
              Product name
              <br />
              <span itemProp="price" className="price product-price">
                {' '}
                ₹ 580.00{' '}
              </span>
            </div>
          </div>
          <div className="text-center">
            <img
              height="150px"
              src="https://venustradersonline.com/4012-thickbox_default/hp-ink-cartridge-685-cyan.jpg"
            />
            <div>
              Product name
              <br />
              <span itemProp="price" className="price product-price">
                {' '}
                ₹ 580.00{' '}
              </span>
            </div>
          </div>
          <div className="text-center">
            <img
              height="150px"
              src="https://venustradersonline.com/4012-thickbox_default/hp-ink-cartridge-685-cyan.jpg"
            />
            <div>
              Product name
              <br />
              <span itemProp="price" className="price product-price">
                {' '}
                ₹ 580.00{' '}
              </span>
            </div>
          </div>
          <div className="text-center">
            <img
              height="150px"
              src="https://venustradersonline.com/4012-thickbox_default/hp-ink-cartridge-685-cyan.jpg"
            />
            <div>
              Product name
              <br />
              <span itemProp="price" className="price product-price">
                {' '}
                ₹ 580.00{' '}
              </span>
            </div>
          </div>
          <div className="text-center">
            <img
              height="150px"
              src="https://venustradersonline.com/4012-thickbox_default/hp-ink-cartridge-685-cyan.jpg"
            />
            <div>
              Product name
              <br />
              <span itemProp="price" className="price product-price">
                {' '}
                ₹ 580.00{' '}
              </span>
            </div>
          </div>
          <div className="text-center">
            <img
              height="150px"
              src="https://venustradersonline.com/4012-thickbox_default/hp-ink-cartridge-685-cyan.jpg"
            />
            <div>
              Product name
              <br />
              <span itemProp="price" className="price product-price">
                {' '}
                ₹ 580.00{' '}
              </span>
            </div>
          </div>
          <div className="text-center">
            <img
              height="150px"
              src="https://venustradersonline.com/4012-thickbox_default/hp-ink-cartridge-685-cyan.jpg"
            />
            <div>
              Product name
              <br />
              <span itemProp="price" className="price product-price">
                {' '}
                ₹ 580.00{' '}
              </span>
            </div>
          </div>
        </CarouselNew>
      </div>

      <div
        style={{
          borderTop: '1px solid rgb(79, 159, 207)',
          margin: '1%',
          paddingTop: '1%',
        }}
      >
        <h3>Categories</h3>
      </div>
      <div style={{ paddingBottom: '3%', width: '100%' }}>
        {/* <Slider {...settings} style={{ textAlign: 'center' }}>
          <div>
            <img
              height="150px"
              width="100%"
              src="https://venustradersonline.com/4012-thickbox_default/hp-ink-cartridge-685-cyan.jpg"
            />
          </div>
          <div>
            <img
              height="150px"
              src="https://rukminim1.flixcart.com/image/832/832/k1118cw0/pencil/h/m/g/absolute-pencils-apsara-original-imafkpayztq4xjyp.jpeg?q=70"
            />
          </div>
          <div>
            <img
              height="150px"
              src="https://rukminim1.flixcart.com/image/832/832/k1118cw0/pencil/w/c/z/triga-pencils-apsara-original-imafkpaazah6cham.jpeg?q=70"
            />
          </div>
          <div>
            <img
              height="150px"
              src="https://rukminim1.flixcart.com/image/832/832/knni7ww0/pencil/y/2/c/gem-flair-creative-original-imag2ajewpnnen8g.jpeg?q=70"
            />
          </div>
          <div>
            <img
              height="150px"
              src="https://rukminim1.flixcart.com/image/832/832/kebpqq80/diary-notebook/s/r/h/classmate-02105012-original-imafvf9aeb94tb78.jpeg?q=70"
            />
          </div>
          <div>
            <img
              height="150px"
              src="https://venustradersonline.com/4012-thickbox_default/hp-ink-cartridge-685-cyan.jpg"
            />
          </div>
          <div>
            <img
              height="150px"
              src="https://rukminim1.flixcart.com/image/832/832/k1118cw0/pencil/h/m/g/absolute-pencils-apsara-original-imafkpayztq4xjyp.jpeg?q=70"
            />
          </div>
          <div>
            <img
              height="150px"
              src="https://rukminim1.flixcart.com/image/832/832/k1118cw0/pencil/w/c/z/triga-pencils-apsara-original-imafkpaazah6cham.jpeg?q=70"
            />
          </div>
        </Slider> */}

        <CarouselNew responsive={responsive}>
          <div className="text-center">
            <img
              height="150px"
              src="https://venustradersonline.com/4012-thickbox_default/hp-ink-cartridge-685-cyan.jpg"
            />
          </div>
          <div className="text-center">
            <img
              height="150px"
              src="https://venustradersonline.com/4012-thickbox_default/hp-ink-cartridge-685-cyan.jpg"
            />
          </div>
          <div className="text-center">
            <img
              height="150px"
              src="https://venustradersonline.com/4012-thickbox_default/hp-ink-cartridge-685-cyan.jpg"
            />
          </div>
          <div className="text-center">
            <img
              height="150px"
              src="https://venustradersonline.com/4012-thickbox_default/hp-ink-cartridge-685-cyan.jpg"
            />
          </div>
          <div className="text-center">
            <img
              height="150px"
              src="https://venustradersonline.com/4012-thickbox_default/hp-ink-cartridge-685-cyan.jpg"
            />
          </div>
          <div className="text-center">
            <img
              height="150px"
              src="https://venustradersonline.com/4012-thickbox_default/hp-ink-cartridge-685-cyan.jpg"
            />
          </div>
          <div className="text-center">
            <img
              height="150px"
              src="https://venustradersonline.com/4012-thickbox_default/hp-ink-cartridge-685-cyan.jpg"
            />
          </div>
          <div className="text-center">
            <img
              height="150px"
              src="https://venustradersonline.com/4012-thickbox_default/hp-ink-cartridge-685-cyan.jpg"
            />
          </div>
        </CarouselNew>
      </div>
    </div>
  );
}

DashboardNew.propTypes = {
  // dispatch: PropTypes.func.isRequired,
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
