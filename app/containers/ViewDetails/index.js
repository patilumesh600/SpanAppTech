/* eslint-disable no-const-assign */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-debugger */
/**
 *
 * ViewDetails
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import * as RBS from 'react-bootstrap';
import {
  faStar,
  faRupeeSign,
  faCartPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import CarouselNew from 'react-multi-carousel';
import banImg1 from 'images/cartridge.jpg';
import ProgressBar from 'react-customizable-progressbar';
import makeSelectViewDetails from './selectors';
import reducer from './reducer';
import saga from './saga';
import 'react-multi-carousel/lib/styles.css';
import './details.css';
import productDetail from '../../json/productDetail.json';

export function ViewDetails() {
  useInjectReducer({ key: 'viewDetails', reducer });
  useInjectSaga({ key: 'viewDetails', saga });

  // const responsive = {
  //   superLargeDesktop: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5,
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 4,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //   },
  // };

  return (
    <RBS.Row id="divProductList">
      <RBS.Col
        md={{ span: 10, offset: 1 }}
        style={{
          border: '1px solid #dedede',
          padding: '0px',
          boxShadow: '0 2px 2px #e2e2e2, 0 1px 1px #f1f1f1',
          marginTop: '2%',
        }}
      >
        <RBS.Col md={12} className="vheader">
          <div className="inline-block">
            <h3>
              HP INK CARTRIDGE 685 CYAN{' '}
              <span style={{ color: '#13B65D', fontSize: '16px' }}>
                {' '}
                <FontAwesomeIcon icon={faStar} /> 4.5
              </span>{' '}
              <a href="void" style={{ color: '##0288d1', fontSize: '16px' }}>
                &nbsp;|&nbsp; 31 Review
              </a>
            </h3>
          </div>
        </RBS.Col>
        <RBS.Tabs id="browsebiketab">
          <RBS.Tab eventKey="overview" title="Overview" className="detailtab">
            <RBS.Row>
              <RBS.Col md={6} style={{ padding: '0px' }}>
                <RBS.Carousel>
                  {productDetail.ImageURLS.map(data =>
                    bindCaourselImages(data),
                  )}
                </RBS.Carousel>
              </RBS.Col>
              <RBS.Col md={6} style={{ borderLeft: '1px solid #d3d3d3' }}>
                <RBS.Col
                  md={12}
                  className="font12 text-light-grey margin-bottom20"
                >
                  {/* <span className="inline-block margin-right15">Key specs</span> */}
                  <ul style={{ padding: '0px' }}>
                    <li>
                      <b>Brand:</b> HP
                    </li>
                    <li>
                      <b>Model no:</b> CZ122AA
                    </li>
                    <li>
                      <b>Colour :</b> Cyan Ink Type- Dye based
                    </li>
                    <li>
                      <b>Page Yield :</b> 300 pages
                    </li>
                  </ul>
                </RBS.Col>
                <RBS.Row style={{ marginLeft: '0px' }}>
                  <RBS.Col
                    md={4}
                    className="text-light-grey"
                    style={{ fontSize: '14px' }}
                  >
                    <b>Price</b>
                  </RBS.Col>
                  <RBS.Col
                    md={8}
                    className="text-light-grey"
                    style={{ fontSize: '14px' }}
                  >
                    <b>Available Colours</b>
                  </RBS.Col>
                </RBS.Row>
                <RBS.Row style={{ marginLeft: '0px' }}>
                  <RBS.Col md={4}>
                    <h4>
                      {' '}
                      <FontAwesomeIcon icon={faRupeeSign} /> 1,52,878{' '}
                    </h4>
                  </RBS.Col>
                  <RBS.Col md={8}>
                    <div
                      id="modelColorsContent"
                      data-id="modelColorsContent"
                      className="bw-model-tabs-data content-box-shadow card-bottom-margin"
                    >
                      <ul id="modelColorsList" className="color-box-list">
                        <li>
                          <div
                            title="Red"
                            className="color-box inline-block color-count-one"
                            style={{ backgroundColor: 'rgb(172, 20, 56)' }}
                          />
                        </li>
                        <li>
                          <div
                            title="Black"
                            className="color-box inline-block color-count-one"
                            style={{ backgroundColor: '#0B0B13' }}
                          />
                        </li>
                      </ul>
                    </div>
                  </RBS.Col>
                </RBS.Row>
                <hr />
                <br />
                <RBS.Row style={{ marginLeft: '0px' }}>
                  <RBS.Col md={5}>
                    <RBS.Button type="button">
                      <FontAwesomeIcon icon={faCartPlus} /> Add To Cart
                    </RBS.Button>
                  </RBS.Col>
                </RBS.Row>
              </RBS.Col>
            </RBS.Row>
          </RBS.Tab>

          <RBS.Tab
            eventKey="price"
            title="More Infomation"
            className="detailtab"
          >
            <RBS.Row>
              {/* <RBS.Col
                md={4}
                style={{
                  padding: '15px',
                  // backgroundImage: `url(${banImg1})`,
                  minHeight: '300px',
                }}
              /> */}
              <RBS.Col md={4}>
                <img style={{ width: '100%' }} src={banImg1} alt="" />
              </RBS.Col>

              <RBS.Col md={8}>
                <RBS.Accordion defaultActiveKey="0">
                  <RBS.Card>
                    <RBS.Accordion.Toggle as={RBS.Card.Header} eventKey="0">
                      Product Inforamtion
                    </RBS.Accordion.Toggle>
                    <RBS.Accordion.Collapse eventKey="0">
                      <RBS.Card.Body>
                        <RBS.Row>
                          <RBS.Col md={12}>
                            <p>
                              HP ink cartridges are designed to be free of
                              defects, formulated to prevent printhead damage,
                              and ready to load in a snap. This Cartridge is
                              compatible with HP Deskjet Ink Advantage printer
                              models - 1015, 4645 All-in-One, 3545 e All-in-One,
                              3548 e All-in-One, 4515 e All-in-One, 4518 e
                              All-in-One, 1515 All-in-One , 1518 All-in-One,
                              2645 All-in-One, 2648 All-in-One, 2515 All-in-One
                              , 2545 All In One, 3515 e All-in-One.
                            </p>
                          </RBS.Col>
                        </RBS.Row>
                      </RBS.Card.Body>
                    </RBS.Accordion.Collapse>
                  </RBS.Card>
                  <RBS.Card>
                    <RBS.Accordion.Toggle as={RBS.Card.Header} eventKey="0">
                      Features
                    </RBS.Accordion.Toggle>
                    <RBS.Accordion.Collapse eventKey="0">
                      <RBS.Card.Body>
                        <RBS.Row>
                          <RBS.Col md={12}>
                            <ul style={{ listStyle: 'square' }}>
                              <li>Shop where you are</li>
                              <li>Shop smarter</li>
                              <li>Easy returns</li>
                              <li>Quality checks</li>
                              <li>Transit-safe packaging</li>
                            </ul>
                          </RBS.Col>
                        </RBS.Row>
                      </RBS.Card.Body>
                    </RBS.Accordion.Collapse>
                  </RBS.Card>
                  <RBS.Card>
                    <RBS.Accordion.Toggle as={RBS.Card.Header} eventKey="0">
                      Manufacture
                    </RBS.Accordion.Toggle>
                    <RBS.Accordion.Collapse eventKey="0">
                      <RBS.Card.Body>
                        <RBS.Row>
                          <RBS.Col md={12}>
                            <p>
                              Manufacturing is the production of goods through
                              the use of labour, machinery, tools and biological
                              or chemical processing or formulation. ... The
                              materials are modified during various
                              manufacturing processes to create the finished
                              product.
                            </p>
                          </RBS.Col>
                        </RBS.Row>
                      </RBS.Card.Body>
                    </RBS.Accordion.Collapse>
                  </RBS.Card>
                </RBS.Accordion>
              </RBS.Col>
            </RBS.Row>
          </RBS.Tab>

          {/* <RBS.Tab eventKey="specs" title="Specification" className="detailtab">
            <RBS.Col md={12}>
              <RBS.Accordion defaultActiveKey="4">
                {productDetail.Specififcation.map(data =>
                  bindAllFeatures(data),
                )}
              </RBS.Accordion>
            </RBS.Col>
          </RBS.Tab> */}

          {/* <RBS.Tab eventKey="feature" title="Features" className="detailtab">
            <RBS.Col md={12}>
              <RBS.Row>
                {productDetail.Features.map(data => bindBikeFeatures(data))}
              </RBS.Row>
            </RBS.Col>
          </RBS.Tab> */}

          <RBS.Tab
            eventKey="User Reviews"
            title="User Reviews"
            className="detailtab"
          >
            <h6>Rating Parameters</h6>
            <RBS.Row>
              {productDetail.RatingCriteria.map(data =>
                bindRatingSummary(data),
              )}
            </RBS.Row>
            <hr />
            <RBS.Row>
              {productDetail.UserReviews.map(data => bindReviewSummary(data))}
            </RBS.Row>
          </RBS.Tab>

          {/* <RBS.Tab
            eventKey="RELATED PRODUCTS"
            title="RELATED PRODUCTS"
            className="detailtab"
          >
            <RBS.Row style={{ marginTop: '5%' }}>
              gjhghgjg hghgj hhhgghjgh hghghghggygyghgh hghgjhg 
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
            </RBS.Row>
          </RBS.Tab> */}
        </RBS.Tabs>
      </RBS.Col>
    </RBS.Row>
  );
}

ViewDetails.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  viewDetails: makeSelectViewDetails(),
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

function bindCaourselImages(data) {
  return (
    <RBS.Carousel.Item>
      <img
        className="d-block w-100"
        src={data.URL}
        alt="First slide"
        height="300px"
      />
      <RBS.Carousel.Caption />
    </RBS.Carousel.Item>
  );
}
// function bindAllFeatures(data) {
//   return (
//     <RBS.Card>
//       <RBS.Accordion.Toggle as={RBS.Card.Header} eventKey={data.ID}>
//         <div className="specs-list-item__title" data-componentid="4">
//           <img
//             src={data.ICONURL}
//             width="30"
//             height="28"
//             className="inline-block margin-right10"
//             alt={data.Name}
//             title={data.Name}
//           />
//           <span className="inline-block">{data.Name}</span>
//         </div>
//       </RBS.Accordion.Toggle>
//       <RBS.Accordion.Collapse eventKey={data.ID}>
//         <RBS.Card.Body>
//           <RBS.Row>
//             {data.SubSpeicification.map(data1 => bindSubSpeicification(data1))}
//           </RBS.Row>
//         </RBS.Card.Body>
//       </RBS.Accordion.Collapse>
//     </RBS.Card>
//   );
// }

// function bindSubSpeicification(data) {
//   return (
//     <RBS.Col md={6} className="specs-content__item">
//       <RBS.Row>
//         <RBS.Col
//           md={6}
//           className="specs-features-item__content text-light-grey"
//         >
//           {data.Name}
//         </RBS.Col>
//         <RBS.Col md={6} className="specs-features-item__content text-bold">
//           {data.Value}
//         </RBS.Col>
//       </RBS.Row>
//     </RBS.Col>
//   );
// }

// function bindBikeFeatures(data) {
//   return (
//     <RBS.Col md={4} className="specs-content__item">
//       <RBS.Row>
//         <RBS.Col
//           md={6}
//           className="specs-features-item__content text-light-grey"
//         >
//           {data.Name}
//         </RBS.Col>
//         <RBS.Col md={6} className="specs-features-item__content text-bold">
//           {data.Value}
//         </RBS.Col>
//       </RBS.Row>
//     </RBS.Col>
//   );
// }

function bindRatingSummary(data) {
  const percentage = (100 * data.Value) / 5;
  let color = '';
  if (percentage >= 75) {
    color = '#13B65D';
  } else if (percentage >= 40 && percentage < 75) {
    color = '#EFD700';
  } else if (percentage < 40) {
    color = '#ef3f30';
  }
  return (
    <RBS.Col md={2} className="range-progress">
      <div style={{ fontSize: '14px', display: 'inline' }}>{data.Name}</div>
      <ProgressBar
        radius={25}
        progress={percentage}
        strokeWidth={8}
        strokeColor={color}
        strokeLinecap="square"
        trackStrokeWidth={8}
      >
        <div className="indicator">
          <div>{data.Value}</div>
        </div>
      </ProgressBar>
    </RBS.Col>
  );
}

function bindReviewSummary(data) {
  let bcolor = '';
  if (data.Rating >= 4) {
    bcolor = 'success';
  } else if (data.Rating < 4 && data.Rating >= 2.5) {
    bcolor = 'warning';
  } else if (data.Rating < 2.5) {
    bcolor = 'danger';
  }
  return (
    <RBS.Col md={3}>
      <RBS.Card className="review-body">
        <RBS.Card.Body>
          <RBS.Card.Title className="review-title">
            <RBS.Badge pill variant={bcolor}>
              <FontAwesomeIcon icon={faStar} />
              &nbsp;{data.Rating}&nbsp;
            </RBS.Badge>{' '}
            {data.Title}
          </RBS.Card.Title>
          <RBS.Card.Subtitle className="mb-2 text-muted review-subtitle">
            {data.Date} by {data.Name}
          </RBS.Card.Subtitle>
          <RBS.Card.Text className="review-text">{data.Review}</RBS.Card.Text>
        </RBS.Card.Body>
      </RBS.Card>
    </RBS.Col>
  );
}

export default compose(withConnect)(ViewDetails);
