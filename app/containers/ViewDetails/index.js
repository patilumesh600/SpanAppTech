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
import { faStar, faRupeeSign, faCar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import makeSelectViewDetails from './selectors';
import reducer from './reducer';
import saga from './saga';
import './details.css';

import banImg1 from '../../images/icon-512x512.png';
import productDetail from '../../json/productDetail.json';
import ProgressBar from 'react-customizable-progressbar';

export function ViewDetails() {
  useInjectReducer({ key: 'viewDetails', reducer });
  useInjectSaga({ key: 'viewDetails', saga });

  return (
    <RBS.Row>
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
              Revolt RV 400{' '}
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
              <RBS.Col md={6}>
                <RBS.Col
                  md={12}
                  className="font12 text-light-grey margin-bottom20"
                >
                  <span className="inline-block margin-right15">Key specs</span>
                  <ul id="key-specs-list" className="inline-block">
                    <li>
                      <img
                        src="https://imgd.aeplcdn.com/0x0/bw/static/icons/a2a2a2/range.svg"
                        width="16"
                        height="14"
                        className="inline-block margin-right5"
                        alt="Riding Range"
                        title="Riding Range"
                      />
                      80-150 Km
                    </li>
                    <li>
                      <img
                        src="https://imgd.aeplcdn.com/0x0/cw/static/icons/svg/top-speed.svg"
                        width="16"
                        height="14"
                        className="inline-block margin-right5"
                        alt="Top Speed"
                        title="Top Speed"
                      />
                      45-85 Kmph
                    </li>
                    <li>
                      <img
                        src="https://imgd.aeplcdn.com/0x0/bw/static/icons/a2a2a2/battery-charging-time.svg"
                        width="16"
                        height="14"
                        className="inline-block margin-right5"
                        alt="Battery charging time"
                        title="Battery charging time"
                      />
                      4.5 Hrs
                    </li>
                    <li>
                      <img
                        src="https://imgd.aeplcdn.com/0x0/bw/static/icons/a2a2a2/power.svg"
                        width="16"
                        height="14"
                        className="inline-block margin-right5"
                        alt="Rated Power"
                        title="Rated Power"
                      />
                      3000 W
                    </li>
                  </ul>
                </RBS.Col>
                <RBS.Row>
                  <RBS.Col md={4}>
                    <h6>Version</h6>
                    <RBS.Form.Control
                      as="select"
                      size="sm"
                      placeholder="Sort By"
                    >
                      <option>Premium</option>
                      <option>Standard</option>
                    </RBS.Form.Control>
                  </RBS.Col>
                  <RBS.Col md={4}>
                    <h6>Location</h6>
                    <RBS.Form.Control
                      as="select"
                      size="sm"
                      placeholder="Sort By"
                    >
                      <option>Pune</option>
                      <option>Mumbai</option>
                      <option>Delhi</option>
                      <option>banglore</option>
                    </RBS.Form.Control>
                  </RBS.Col>
                </RBS.Row>
                <br />
                <RBS.Row>
                  <RBS.Col
                    md={4}
                    className="text-light-grey"
                    style={{ fontSize: '14px' }}
                  >
                    On-road price in Pune
                  </RBS.Col>
                  <RBS.Col
                    md={8}
                    className="text-light-grey"
                    style={{ fontSize: '14px' }}
                  >
                    Available Colours
                  </RBS.Col>
                </RBS.Row>
                <RBS.Row>
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
                <RBS.Row>
                  <RBS.Col md={5}>
                    <RBS.Button variant="warning" type="button" block>
                      {' '}
                      <FontAwesomeIcon icon={faCar} /> Book Test Ride
                    </RBS.Button>
                  </RBS.Col>
                  <RBS.Col md={5}>
                    <RBS.Button variant="success" type="button" block>
                      {' '}
                      <FontAwesomeIcon icon={faRupeeSign} /> View Detailed
                      Pricing
                    </RBS.Button>
                  </RBS.Col>
                </RBS.Row>
              </RBS.Col>
            </RBS.Row>
          </RBS.Tab>

          <RBS.Tab eventKey="price" title="Pricing" className="detailtab">
            <RBS.Row>
              <RBS.Col
                md={4}
                style={{
                  padding: '15px',
                  backgroundImage: `url(${banImg1})`,
                  minHeight: '300px',
                }}
              />
              <RBS.Col md={8}>
                <RBS.Row>
                  <RBS.Col md={4}>
                    <h6>Version</h6>
                    <RBS.Form.Control
                      as="select"
                      size="sm"
                      placeholder="Sort By"
                    >
                      <option>Premium</option>
                      <option>Standard</option>
                    </RBS.Form.Control>
                  </RBS.Col>
                  <RBS.Col md={4}>
                    <h6>Location</h6>
                    <RBS.Form.Control
                      as="select"
                      size="sm"
                      placeholder="Sort By"
                    >
                      <option>Pune</option>
                      <option>Mumbai</option>
                      <option>Delhi</option>
                      <option>banglore</option>
                    </RBS.Form.Control>
                  </RBS.Col>
                </RBS.Row>
                <br />
                <RBS.Accordion defaultActiveKey="0">
                  <RBS.Card>
                    <RBS.Accordion.Toggle as={RBS.Card.Header} eventKey="0">
                      Premium (Electric Battery)
                    </RBS.Accordion.Toggle>
                    <RBS.Accordion.Collapse eventKey="0">
                      <RBS.Card.Body>
                        <RBS.Row>
                          <RBS.Col md={6}>
                            <span>Ex-Showroom Price</span>
                          </RBS.Col>
                          <RBS.Col md={6}>
                            <span>
                              {' '}
                              <FontAwesomeIcon icon={faRupeeSign} />{' '}
                              &nbsp;&nbsp;1,47,963
                            </span>
                          </RBS.Col>
                        </RBS.Row>
                        <RBS.Row>
                          <RBS.Col md={6}>
                            <span>RTO</span>
                          </RBS.Col>
                          <RBS.Col md={6}>
                            <span>
                              {' '}
                              <FontAwesomeIcon icon={faRupeeSign} />{' '}
                              &nbsp;&nbsp;0
                            </span>
                          </RBS.Col>
                        </RBS.Row>
                        <RBS.Row>
                          <RBS.Col md={6}>
                            <span>Insurance (Comprehensive)</span>
                          </RBS.Col>
                          <RBS.Col md={6}>
                            <span>
                              {' '}
                              <FontAwesomeIcon icon={faRupeeSign} />{' '}
                              &nbsp;&nbsp;4,915
                            </span>
                          </RBS.Col>
                        </RBS.Row>
                        <hr />
                        <RBS.Row>
                          <RBS.Col md={6}>
                            <h6>On-road price in Pune</h6>
                          </RBS.Col>
                          <RBS.Col md={6}>
                            <h6>
                              <FontAwesomeIcon icon={faRupeeSign} />
                              &nbsp;&nbsp;1,52,878
                            </h6>
                          </RBS.Col>
                        </RBS.Row>
                      </RBS.Card.Body>
                    </RBS.Accordion.Collapse>
                  </RBS.Card>
                  <RBS.Card>
                    <RBS.Accordion.Toggle as={RBS.Card.Header} eventKey="1">
                      Standard (Electric Battery)
                    </RBS.Accordion.Toggle>
                    <RBS.Accordion.Collapse eventKey="1">
                      <RBS.Card.Body>
                        <RBS.Row>
                          <RBS.Col md={6}>
                            <span>Ex-Showroom Price</span>
                          </RBS.Col>
                          <RBS.Col md={6}>
                            <span>
                              {' '}
                              <FontAwesomeIcon icon={faRupeeSign} />{' '}
                              &nbsp;&nbsp;1,47,963
                            </span>
                          </RBS.Col>
                        </RBS.Row>
                        <RBS.Row>
                          <RBS.Col md={6}>
                            <span>RTO</span>
                          </RBS.Col>
                          <RBS.Col md={6}>
                            <span>
                              {' '}
                              <FontAwesomeIcon icon={faRupeeSign} />{' '}
                              &nbsp;&nbsp;0
                            </span>
                          </RBS.Col>
                        </RBS.Row>
                        <RBS.Row>
                          <RBS.Col md={6}>
                            <span>Insurance (Comprehensive)</span>
                          </RBS.Col>
                          <RBS.Col md={6}>
                            <span>
                              {' '}
                              <FontAwesomeIcon icon={faRupeeSign} />{' '}
                              &nbsp;&nbsp;4,915
                            </span>
                          </RBS.Col>
                        </RBS.Row>
                        <hr />
                        <RBS.Row>
                          <RBS.Col md={6}>
                            <h6>On-road price in Pune</h6>
                          </RBS.Col>
                          <RBS.Col md={6}>
                            <h6>
                              <FontAwesomeIcon icon={faRupeeSign} />
                              &nbsp;&nbsp;1,52,878
                            </h6>
                          </RBS.Col>
                        </RBS.Row>
                      </RBS.Card.Body>
                    </RBS.Accordion.Collapse>
                  </RBS.Card>
                </RBS.Accordion>
              </RBS.Col>
            </RBS.Row>
          </RBS.Tab>

          <RBS.Tab eventKey="specs" title="Specification" className="detailtab">
            <RBS.Col md={12}>
              <RBS.Accordion defaultActiveKey="4">
                {productDetail.Specififcation.map(data =>
                  bindAllFeatures(data),
                )}
              </RBS.Accordion>
            </RBS.Col>
          </RBS.Tab>

          <RBS.Tab eventKey="feature" title="Features" className="detailtab">
            <RBS.Col md={12}>
              <RBS.Row>
                {productDetail.Features.map(data => bindBikeFeatures(data))}
              </RBS.Row>
            </RBS.Col>
          </RBS.Tab>

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
function bindAllFeatures(data) {
  return (
    <RBS.Card>
      <RBS.Accordion.Toggle as={RBS.Card.Header} eventKey={data.ID}>
        <div className="specs-list-item__title" data-componentid="4">
          <img
            src={data.ICONURL}
            width="30"
            height="28"
            className="inline-block margin-right10"
            alt={data.Name}
            title={data.Name}
          />
          <span className="inline-block">{data.Name}</span>
        </div>
      </RBS.Accordion.Toggle>
      <RBS.Accordion.Collapse eventKey={data.ID}>
        <RBS.Card.Body>
          <RBS.Row>
            {data.SubSpeicification.map(data1 => bindSubSpeicification(data1))}
          </RBS.Row>
        </RBS.Card.Body>
      </RBS.Accordion.Collapse>
    </RBS.Card>
  );
}

function bindSubSpeicification(data) {
  return (
    <RBS.Col md={6} className="specs-content__item">
      <RBS.Row>
        <RBS.Col
          md={6}
          className="specs-features-item__content text-light-grey"
        >
          {data.Name}
        </RBS.Col>
        <RBS.Col md={6} className="specs-features-item__content text-bold">
          {data.Value}
        </RBS.Col>
      </RBS.Row>
    </RBS.Col>
  );
}

function bindBikeFeatures(data) {
  return (
    <RBS.Col md={4} className="specs-content__item">
      <RBS.Row>
        <RBS.Col
          md={6}
          className="specs-features-item__content text-light-grey"
        >
          {data.Name}
        </RBS.Col>
        <RBS.Col md={6} className="specs-features-item__content text-bold">
          {data.Value}
        </RBS.Col>
      </RBS.Row>
    </RBS.Col>
  );
}

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
