/* eslint-disable react/no-unescaped-entities */
/**
 *
 * Profile
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { Helmet } from 'react-helmet';
// import { Container, Form, Col, Button, Row, Card, Image } from 'react-bootstrap';

import * as RBS from 'react-bootstrap';
import {
  faEdit,
  faMars,
  faCalendarAlt,
  faEnvelope,
  faMobileAlt,
  faUser,
  // faHeart,
  // faCar,
  // faComment,
  faKey,
  faGift,
  faArrowCircleRight,
  faBackspace,
  faGifts,
  faWhatsapp,
  faCopy,
  faCommentAlt,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import {} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import personaldetails from '../../json/myprofile.json';
import makeSelectProfile from './selectors';
import reducer from './reducer';
import saga from './saga';
import './profile.css';
import referimg from '../../images/bgImages/2856741.jpg';

export function Profile() {
  useInjectReducer({ key: 'profile', reducer });
  useInjectSaga({ key: 'profile', saga });

  return (
    <div id="divUserProfile">
      <RBS.Row>
        <RBS.Col>
          <RBS.Row>
            <RBS.Col
              md={2}
              style={{
                border: '1px solid #e1e1e1',
                // background: ' RGB(212,230,217)',
                background: '#4f9fcf',
                color: '#FFF',
                // maxHeight: '300px',
              }}
            >
              <RBS.Row style={{ padding: '15px 0px', marginBottom: '5px' }}>
                <RBS.Col xs={12} md={12} style={{ textAlign: 'center' }}>
                  <RBS.Image
                    src={personaldetails.ImageURL}
                    roundedCircle
                    height="150"
                    width="150"
                  />
                </RBS.Col>
                <RBS.Col md={12} xs={12} style={{ textAlign: 'center' }}>
                  <div
                    className="center"
                    style={{ fontSize: '18px', fontWeight: '600' }}
                  >
                    {personaldetails.Name}
                  </div>
                  <div className="center" style={{ fontSize: '15px' }}>
                    {' '}
                    <FontAwesomeIcon icon={faMars} />
                    &nbsp;&nbsp;
                    {personaldetails.Gender}&nbsp;&nbsp;|{' '}
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    &nbsp;&nbsp;
                    {personaldetails.Age} Years
                    <br />
                    <FontAwesomeIcon icon={faEnvelope} />
                    &nbsp;
                    {personaldetails.EmailAddress}
                    <br />
                    <FontAwesomeIcon icon={faMobileAlt} />
                    &nbsp;&nbsp;
                    {personaldetails.MobileNumber}
                  </div>
                </RBS.Col>
              </RBS.Row>
            </RBS.Col>
            <RBS.Col md={10}>
              <RBS.Card className="profile-card">
                <RBS.Tabs defaultActiveKey="myaccount" id="profile-tab">
                  <RBS.Tab
                    eventKey="myaccount"
                    title={
                      <span>
                        <span className="hide-xs">My Account</span>{' '}
                        {<FontAwesomeIcon icon={faUser} />}
                      </span>
                    }
                    className="prof-tab"
                  >
                    <RBS.Col>
                      <MyAccount />
                    </RBS.Col>
                  </RBS.Tab>

                  <RBS.Tab
                    eventKey="changepassword"
                    title={
                      <span>
                        <span className="hide-xs">Change Password</span>{' '}
                        {<FontAwesomeIcon icon={faKey} />}
                      </span>
                    }
                    className="prof-tab"
                  >
                    <RBS.Col md={12}>
                      <FontAwesomeIcon icon={faEdit} />
                    </RBS.Col>
                  </RBS.Tab>

                  {/* <RBS.Tab
                    eventKey="myreview"
                    title={
                      <span>
                        <span className="hide-xs">My Reviews</span>{' '}
                        {<FontAwesomeIcon icon={faComment} />}
                      </span>
                    }
                    className="prof-tab"
                  >
                    <RBS.Col md={12}>
                      <FontAwesomeIcon icon={faEdit} />
                    </RBS.Col>
                  </RBS.Tab>
                  <RBS.Tab
                    eventKey="shortlisted"
                    title={
                      <span>
                        <span className="hide-xs">Shortlisted</span>{' '}
                        {<FontAwesomeIcon icon={faHeart} />}
                      </span>
                    }
                    className="prof-tab"
                  >
                    <RBS.Col md={12}>
                      <FontAwesomeIcon icon={faEdit} />
                    </RBS.Col>
                  </RBS.Tab>
                  <RBS.Tab
                    eventKey="testrides"
                    title={
                      <span>
                        <span className="hide-xs">My Test Rides</span>{' '}
                        {<FontAwesomeIcon icon={faCar} />}
                      </span>
                    }
                    className="prof-tab"
                  >
                    <RBS.Col md={12}>
                      <FontAwesomeIcon icon={faEdit} />
                    </RBS.Col>
                  </RBS.Tab> */}

                  <RBS.Tab
                    eventKey="orderhistory"
                    title={
                      <span>
                        <span className="hide-xs">Order History</span>{' '}
                        {<FontAwesomeIcon icon={faGift} />}
                      </span>
                    }
                    className="prof-tab"
                  >
                    <RBS.Col md={12} style={{ padding: '0px' }}>
                      <OrderHistory />
                    </RBS.Col>
                  </RBS.Tab>

                  <RBS.Tab
                    eventKey="referandearn"
                    title={
                      <span>
                        <span className="hide-xs">Refer & Earn</span>{' '}
                        {<FontAwesomeIcon icon={faGift} />}
                      </span>
                    }
                    className="prof-tab"
                  >
                    <RBS.Col md={12}>
                      <ReferAndEarn />
                    </RBS.Col>
                  </RBS.Tab>
                </RBS.Tabs>
              </RBS.Card>
            </RBS.Col>
          </RBS.Row>
        </RBS.Col>
      </RBS.Row>
    </div>
  );

  function MyAccount() {
    return (
      <div id="divMyProfile">
        <RBS.Form>
          <RBS.Form.Row>
            <RBS.Form.Group as={RBS.Col} md={2}>
              <RBS.Form.Label>
                First Name<span className="required">*</span>
              </RBS.Form.Label>
            </RBS.Form.Group>
            <RBS.Form.Group as={RBS.Col} md={4}>
              <RBS.Form.Control type="text" placeholder="First Name" />
            </RBS.Form.Group>
            <RBS.Form.Group as={RBS.Col} md={2}>
              <RBS.Form.Label>
                Last Name<span className="required">*</span>
              </RBS.Form.Label>
            </RBS.Form.Group>
            <RBS.Form.Group as={RBS.Col} md={4}>
              <RBS.Form.Control type="text" placeholder="Last Name" />
            </RBS.Form.Group>
            <RBS.Form.Group as={RBS.Col} md={2}>
              <RBS.Form.Label>
                Email Address<span className="required">*</span>
              </RBS.Form.Label>
            </RBS.Form.Group>
            <RBS.Form.Group as={RBS.Col} md={4}>
              <RBS.Form.Control type="email" placeholder="Email Address" />
            </RBS.Form.Group>
            <RBS.Form.Group as={RBS.Col} md={2}>
              <RBS.Form.Label>
                Mobile number<span className="required">*</span>
              </RBS.Form.Label>
            </RBS.Form.Group>
            <RBS.Form.Group as={RBS.Col} md={4}>
              <RBS.Form.Control type="text" placeholder="Mobile number" />
            </RBS.Form.Group>
            <RBS.Form.Group as={RBS.Col} md={2}>
              <RBS.Form.Label>Gender</RBS.Form.Label>
            </RBS.Form.Group>
            <RBS.Form.Group as={RBS.Col} md={4}>
              <RBS.Form.Control as="select" placeholder="Select Gender">
                <option>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
              </RBS.Form.Control>
            </RBS.Form.Group>
            <RBS.Form.Group as={RBS.Col} md={2}>
              <RBS.Form.Label>Date of Birth</RBS.Form.Label>
            </RBS.Form.Group>
            <RBS.Form.Group as={RBS.Col} md={4}>
              <RBS.InputGroup>
                <RBS.Form.Control type="text" placeholder="Date of Birth" />
                <RBS.InputGroup.Text id="basic-addon2">
                  <FontAwesomeIcon icon={faCalendarAlt} />
                </RBS.InputGroup.Text>
              </RBS.InputGroup>
            </RBS.Form.Group>
            <RBS.Form.Group as={RBS.Col} md={2}>
              <RBS.Form.Label>State</RBS.Form.Label>
            </RBS.Form.Group>
            <RBS.Form.Group as={RBS.Col} md={4}>
              <RBS.Form.Control as="select" placeholder="Select State">
                <option>Select State</option>
                <option>Maharashtra</option>
                <option>Karnataka</option>
              </RBS.Form.Control>
            </RBS.Form.Group>
            <RBS.Form.Group as={RBS.Col} md={2}>
              <RBS.Form.Label>City</RBS.Form.Label>
            </RBS.Form.Group>
            <RBS.Form.Group as={RBS.Col} md={4}>
              <RBS.Form.Control as="select" placeholder="Select City">
                <option>Select City</option>
                <option>Pune</option>
                <option>Mumbai</option>
              </RBS.Form.Control>
            </RBS.Form.Group>
            <RBS.Form.Group as={RBS.Col} md={2}>
              <RBS.Form.Label>Address line 1</RBS.Form.Label>
            </RBS.Form.Group>
            <RBS.Form.Group as={RBS.Col} md={4}>
              <RBS.Form.Control type="text" placeholder="Address line 1" />
            </RBS.Form.Group>
            <RBS.Form.Group as={RBS.Col} md={2}>
              <RBS.Form.Label>Address line 2</RBS.Form.Label>
            </RBS.Form.Group>
            <RBS.Form.Group as={RBS.Col} md={4}>
              <RBS.Form.Control type="text" placeholder="Address line 2" />
            </RBS.Form.Group>
            <RBS.Form.Group as={RBS.Col} md={2}>
              <RBS.Form.Label>Pin Code</RBS.Form.Label>
            </RBS.Form.Group>
            <RBS.Form.Group as={RBS.Col} md={4}>
              <RBS.Form.Control type="text" placeholder="Pin Code" />
            </RBS.Form.Group>
            <RBS.Form.Group as={RBS.Col} md={2}>
              <RBS.Form.Label>Location</RBS.Form.Label>
            </RBS.Form.Group>
            <RBS.Form.Group as={RBS.Col} md={4}>
              <RBS.Form.Control type="text" placeholder="Location" />
            </RBS.Form.Group>
            <RBS.Form.Group as={RBS.Col} md={{ span: 2, offset: 4 }}>
              <RBS.Button variant="primary" type="submit" block>
                Submit&nbsp;&nbsp;
                <FontAwesomeIcon icon={faArrowCircleRight} />
              </RBS.Button>
            </RBS.Form.Group>
            <RBS.Form.Group as={RBS.Col} md={{ span: 2 }}>
              <RBS.Button variant="secondary" type="button" block>
                <FontAwesomeIcon icon={faBackspace} /> &nbsp;&nbsp;Reset
              </RBS.Button>
            </RBS.Form.Group>
          </RBS.Form.Row>
        </RBS.Form>
      </div>
    );
  }

  function ReferAndEarn() {
    return (
      <div
        style={{
          minHeight: '400px',
          backgroundImage: `url(${referimg})`,
          backgroundSize: 'cover',
          padding: '1%',
        }}
      >
        <RBS.Col className=" text-center shareHeading" md={12} xs={12}>
          <h2>Tell your friends about us and win exiciting gifts!</h2>
        </RBS.Col>
        <div className="clearfix" />
        <RBS.Col className=" text-center shareIcon" md={12} xs={12}>
          <FontAwesomeIcon icon={faGifts} />{' '}
        </RBS.Col>
        <RBS.Col className=" text-center" md={12} xs={12}>
          <RBS.Col
            md={{ span: 4, offset: 4 }}
            style={{
              opacity: '0.95',
              background: 'rgb(255, 255, 255)',
              color: 'rgb(0, 0, 0)',
              boxShadow: 'rgb(93 93 93) 0px 0px 10px',
              padding: '20px',
            }}
          >
            <RBS.InputGroup>
              <RBS.FormControl
                placeholder="Copy URL"
                aria-label="Copy URL"
                aria-describedby="basic-addon1"
              />
              <RBS.InputGroup.Append>
                <RBS.InputGroup.Text
                  id="basic-addon1"
                  className="text-primary noBg"
                >
                  <FontAwesomeIcon icon={faCopy} />{' '}
                </RBS.InputGroup.Text>
              </RBS.InputGroup.Append>
            </RBS.InputGroup>
            <div className="clearfix" />

            <div className="text-muted">OR</div>
            <RBS.InputGroup>
              <RBS.InputGroup.Prepend>
                <RBS.InputGroup.Text
                  id="basic-addon1"
                  className="text-success noBg"
                >
                  <FontAwesomeIcon icon={faWhatsapp} />{' '}
                </RBS.InputGroup.Text>
              </RBS.InputGroup.Prepend>
              <RBS.FormControl
                placeholder="Whatsapp Number"
                aria-label="Whaatsapp Number"
                aria-describedby="basic-addon1"
              />
            </RBS.InputGroup>
            <div className="clearfix" />
            <br />
            <RBS.InputGroup>
              <RBS.InputGroup.Prepend>
                <RBS.InputGroup.Text
                  id="basic-addon1"
                  className="text-danger noBg"
                >
                  <FontAwesomeIcon icon={faEnvelope} />{' '}
                </RBS.InputGroup.Text>
              </RBS.InputGroup.Prepend>
              <RBS.FormControl
                placeholder="Email Address"
                aria-label="Email Address"
                aria-describedby="basic-addon1"
              />
            </RBS.InputGroup>
            <div className="clearfix" />
            <br />
            <RBS.InputGroup>
              <RBS.InputGroup.Prepend>
                <RBS.InputGroup.Text
                  id="basic-addon1"
                  className="text-info noBg"
                >
                  <FontAwesomeIcon icon={faCommentAlt} />{' '}
                </RBS.InputGroup.Text>
              </RBS.InputGroup.Prepend>
              <RBS.FormControl
                placeholder="Phone Number"
                aria-label="Phone Number"
                aria-describedby="basic-addon1"
              />
            </RBS.InputGroup>
            <br />
            <RBS.Button block type="button" variant="warning">
              <FontAwesomeIcon icon={faPaperPlane} /> Invite Friends
            </RBS.Button>
          </RBS.Col>
        </RBS.Col>
      </div>
    );
  }

  function OrderHistory() {
    return (
      <div
        style={{
          minHeight: '400px',
          backgroundSize: 'cover',
          padding: '0px',
        }}
      >
        <RBS.Accordion defaultActiveKey="0">
          {/* defaultActiveKey="0" */}
          <RBS.Card>
            <RBS.Accordion.Toggle as={RBS.Card.Header} eventKey="0">
              <RBS.Row>
                <RBS.Col xs={12} md={6}>
                  Order Number: <b>123</b>
                </RBS.Col>
                <RBS.Col xs={12} md={6} style={{ textAlign: 'right' }}>
                  Delivered on 30 Apr 2021
                </RBS.Col>
              </RBS.Row>
            </RBS.Accordion.Toggle>
            <RBS.Accordion.Collapse eventKey="0">
              <RBS.Card.Body>
                <div
                  style={{
                    padding: '0px',
                  }}
                >
                  <RBS.Row
                    style={{
                      padding: '1%',
                      border: '1px solid #d3d3d3',
                      borderRadius: '5px',
                    }}
                  >
                    <RBS.Col xs={12} md={2}>
                      <img
                        className="_396cs4 _3exPp9"
                        width="100%"
                        height="100px"
                        alt=""
                        src="https://venustradersonline.com/5541-home_default/expressions-note-bk-a-4-400-pages-02001043.jpg"
                      />
                    </RBS.Col>
                    <RBS.Col xs={12} md={5}>
                      <div>
                        <h6> Classmate Note Book</h6>
                      </div>
                      <div>color : Platinum Grey</div>
                      <div>Seller : Classmate</div>
                    </RBS.Col>
                    <RBS.Col xs={12} md={2}>
                      Rs. 170
                    </RBS.Col>
                    <RBS.Col xs={12} md={3}>
                      <span className="AO0UbU">Delivered on 30 Apr 2021</span>
                    </RBS.Col>
                  </RBS.Row>
                  <RBS.Row
                    style={{
                      padding: '1%',
                      border: '1px solid #d3d3d3',
                      borderRadius: '5px',
                      marginTop: '1%',
                    }}
                  >
                    <RBS.Col xs={12} md={2}>
                      <img
                        className="_396cs4 _3exPp9"
                        width="100%"
                        height="100px"
                        alt=""
                        src="https://rukminim1.flixcart.com/image/416/416/book/4/9/2/stationery-original-imadwgbefchsge9s.jpeg?q=70"
                      />
                    </RBS.Col>
                    <RBS.Col xs={12} md={5}>
                      <div>
                        <h6>
                          {' '}
                          Stationery (English, Paperback, Dreamland
                          Publications)
                        </h6>
                      </div>
                      <div>Language : English</div>
                      <div>Publisher : Dreamland</div>
                    </RBS.Col>
                    <RBS.Col xs={12} md={2}>
                      Rs. 780
                    </RBS.Col>
                    <RBS.Col xs={12} md={3}>
                      <span className="AO0UbU">Delivered on 25 Jan 2021</span>
                    </RBS.Col>
                  </RBS.Row>
                  <RBS.Row
                    style={{
                      padding: '1%',
                      border: '1px solid #d3d3d3',
                      borderRadius: '5px',
                      marginTop: '1%',
                    }}
                  >
                    <RBS.Col xs={12} md={2}>
                      <img
                        className="_396cs4 _3exPp9"
                        width="100%"
                        height="100px"
                        alt=""
                        src="https://venustradersonline.com/3835-thumb_product/staedtler-luna-48-colour-pencil-box-137c-48.jpg"
                      />
                    </RBS.Col>
                    <RBS.Col xs={12} md={5}>
                      <div>
                        <h6>STAEDTLER LUNA 48 COLOUR PENCIL BOX 137C-48</h6>
                      </div>
                      <div>Contains 48 colour pencils</div>
                      <div>Break resistant lead</div>
                    </RBS.Col>
                    <RBS.Col xs={12} md={2}>
                      Rs. 1,825
                    </RBS.Col>
                    <RBS.Col xs={12} md={3}>
                      <span className="AO0UbU">Delivered on 18 Dec 2020</span>
                    </RBS.Col>
                  </RBS.Row>
                </div>
              </RBS.Card.Body>
            </RBS.Accordion.Collapse>
          </RBS.Card>
          <RBS.Card>
            <RBS.Accordion.Toggle as={RBS.Card.Header} eventKey="1">
              <RBS.Row>
                <RBS.Col xs={12} md={6}>
                  Order Number: <b>456</b>
                </RBS.Col>
                <RBS.Col xs={12} md={6} style={{ textAlign: 'right' }}>
                  Delivered on 15 May 2021
                </RBS.Col>
              </RBS.Row>
            </RBS.Accordion.Toggle>
            <RBS.Accordion.Collapse eventKey="1">
              <RBS.Card.Body>
                <div
                  style={{
                    padding: '0px',
                  }}
                >
                  <RBS.Row
                    style={{
                      padding: '1%',
                      border: '1px solid #d3d3d3',
                      borderRadius: '5px',
                      marginTop: '1%',
                    }}
                  >
                    <RBS.Col xs={12} md={2}>
                      <img
                        className="_396cs4 _3exPp9"
                        width="100%"
                        height="100px"
                        alt=""
                        src="https://venustradersonline.com/3835-thumb_product/staedtler-luna-48-colour-pencil-box-137c-48.jpg"
                      />
                    </RBS.Col>
                    <RBS.Col xs={12} md={5}>
                      <div>
                        <h6>STAEDTLER LUNA 48 COLOUR PENCIL BOX 137C-48</h6>
                      </div>
                      <div>Contains 48 colour pencils</div>
                      <div>Break resistant lead</div>
                    </RBS.Col>
                    <RBS.Col xs={12} md={2}>
                      Rs. 1,825
                    </RBS.Col>
                    <RBS.Col xs={12} md={3}>
                      <span className="AO0UbU">Delivered on 15 May 2021</span>
                    </RBS.Col>
                  </RBS.Row>
                  <RBS.Row
                    style={{
                      padding: '1%',
                      border: '1px solid #d3d3d3',
                      borderRadius: '5px',
                    }}
                  >
                    <RBS.Col xs={12} md={2}>
                      <img
                        className="_396cs4 _3exPp9"
                        width="100%"
                        height="100px"
                        alt=""
                        src="https://venustradersonline.com/5541-home_default/expressions-note-bk-a-4-400-pages-02001043.jpg"
                      />
                    </RBS.Col>
                    <RBS.Col xs={12} md={5}>
                      <div>
                        <h6> Classmate Note Book</h6>
                      </div>
                      <div>color : Platinum Grey</div>
                      <div>Seller : Classmate</div>
                    </RBS.Col>
                    <RBS.Col xs={12} md={2}>
                      Rs. 170
                    </RBS.Col>
                    <RBS.Col xs={12} md={3}>
                      <span className="AO0UbU">Delivered on 15 May 2021</span>
                    </RBS.Col>
                  </RBS.Row>
                  <RBS.Row
                    style={{
                      padding: '1%',
                      border: '1px solid #d3d3d3',
                      borderRadius: '5px',
                      marginTop: '1%',
                    }}
                  >
                    <RBS.Col xs={12} md={2}>
                      <img
                        className="_396cs4 _3exPp9"
                        width="100%"
                        height="100px"
                        alt=""
                        src="https://rukminim1.flixcart.com/image/416/416/book/4/9/2/stationery-original-imadwgbefchsge9s.jpeg?q=70"
                      />
                    </RBS.Col>
                    <RBS.Col xs={12} md={5}>
                      <div>
                        <h6>
                          {' '}
                          Stationery (English, Paperback, Dreamland
                          Publications)
                        </h6>
                      </div>
                      <div>Language : English</div>
                      <div>Publisher : Dreamland</div>
                    </RBS.Col>
                    <RBS.Col xs={12} md={2}>
                      Rs. 780
                    </RBS.Col>
                    <RBS.Col xs={12} md={3}>
                      <span className="AO0UbU">Delivered on 15 May 2021</span>
                    </RBS.Col>
                  </RBS.Row>
                </div>
              </RBS.Card.Body>
            </RBS.Accordion.Collapse>
          </RBS.Card>
        </RBS.Accordion>
      </div>
    );
  }

  // return (
  //   <div>
  //     <Helmet>
  //       <title>Profile</title>
  //       <meta name="description" content="Description of Profile" />
  //     </Helmet>
  //     {/* <FormattedMessage {...messages.header} /> */}

  //     <Container>
  //       <Row style={{ marginTop: '6%' }}>
  //         <Col md={4}>
  //           <Image style={{ marginTop:'35%', width: '80%' }} src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22171%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20171%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_179ce535811%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2C%26quot%3BLiberation%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_179ce535811%22%3E%3Crect%20width%3D%22171%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2260.8046875%22%20y%3D%2295.4046875%22%3E171x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" roundedCircle />
  //         </Col>
  //         <Col md={8}>

  //           <Card style={{ marginBottom: '2%', background: '#17a2b8',color:'#FFF' }}>
  //             <Card.Body>
  //               <Card.Title>Rohit Sancheti</Card.Title>
  //               <Card.Subtitle className="mb-2">  Male | 29 Years old</Card.Subtitle>
  //               <Card.Subtitle className="mb-2">  sanchetirohit1@gmail.com</Card.Subtitle>
  //               <Card.Subtitle className="mb-2">  9123456789</Card.Subtitle>
  //               {/* <Card.Text>
  //               Please, follow the instructions below to update your profile
  //               </Card.Text> */}
  //               {/* <Card.Link href="#">Card Link</Card.Link>
  //               <Card.Link href="#">Another Link</Card.Link> */}
  //             </Card.Body>
  //           </Card>

  //           <Form>
  //             <RBS.Form.Row>
  //               <RBS.Form.Group as={RBS.Col} controlId="formGridEmail">
  //                 <RBS.Form.Label>Email</RBS.Form.Label>
  //                 <RBS.Form.Control type="email" placeholder="Enter email" />
  //               </RBS.Form.Group>

  //               <RBS.Form.Group as={RBS.Col} controlId="formGridPassword">
  //                 <RBS.Form.Label>Phone Number</RBS.Form.Label>
  //                 <RBS.Form.Control type="text" placeholder="Phone Number" />
  //               </RBS.Form.Group>
  //             </RBS.Form.Row>

  //             <RBS.Form.Group controlId="formGridAddress1">
  //               <RBS.Form.Label>Address</RBS.Form.Label>
  //               <RBS.Form.Control placeholder="1234 Main St" />
  //             </RBS.Form.Group>

  //             <RBS.Form.Group controlId="formGridAddress2">
  //               <RBS.Form.Label>Address 2</RBS.Form.Label>
  //               <RBS.Form.Control placeholder="Apartment, studio, or floor" />
  //             </RBS.Form.Group>

  //             <RBS.Form.Row>
  //             <RBS.Form.Group as={RBS.Col} controlId="formGridState">
  //                 <RBS.Form.Label>State</RBS.Form.Label>
  //                 <RBS.Form.Control as="select" defaultValue="Choose...">
  //                   <option>Choose...</option>
  //                   <option>...</option>
  //                 </RBS.Form.Control>
  //               </RBS.Form.Group>

  //               <RBS.Form.Group as={RBS.Col} controlId="formGridCity">
  //                 <RBS.Form.Label>City</RBS.Form.Label>
  //                 <RBS.Form.Control />
  //               </RBS.Form.Group>

  //               <RBS.Form.Group as={RBS.Col} controlId="formGridZip">
  //                 <RBS.Form.Label>Zip</RBS.Form.Label>
  //                 <RBS.Form.Control />
  //               </RBS.Form.Group>
  //             </RBS.Form.Row>

  //             <RBS.Form.Group id="formGridCheckbox">
  //               <RBS.Form.Check type="checkbox" label="Check me out" />
  //             </RBS.Form.Group>

  //             <Button variant="primary" type="submit">
  //               Submit
  //             </Button>
  //           </Form>

  //         </Col>
  //       </Row>
  //     </Container>
  //   </div>
  // );
}

Profile.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  profile: makeSelectProfile(),
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
)(Profile);
