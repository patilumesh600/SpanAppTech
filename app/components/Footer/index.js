import React from 'react';
// import { FormattedMessage } from 'react-intl';
// import A from 'components/A';
// import LocaleToggle from 'containers/LocaleToggle';
// import Wrapper from './Wrapper';
// import messages from './messages';

import * as RBS from 'react-bootstrap';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  // return (
  //   <Wrapper style={{ padding: '1%', background: '#4f9fcf', color: '#FFF' }}>
  //     <section>
  //       <div>
  //         <a style={{ color: '#FFF' }} id="divTOU" href="#">
  //           Terms of Use
  //         </a>{' '}
  //         |{' '}
  //         <a style={{ color: '#FFF' }} id="divPRV" href="#">
  //           Privacy Policy
  //         </a>
  //       </div>
  //     </section>
  //     {/* <section>
  //       <LocaleToggle />
  //     </section> */}
  //     <section>
  //       {/* <FormattedMessage
  //         {...messages.authorMessage}
  //         values={{
  //           author: <A href="https://twitter.com/mxstbr">Max Stoiber</A>,
  //         }}
  //       /> */}
  //       All Rights Reserved @2021{' '}
  //       <a style={{ color: '#FFF' }} href="#">
  //         Powered by Span
  //       </a>
  //     </section>
  //   </Wrapper>
  // );

  return (
    <RBS.Container
      style={{
        background: '#4f9fcf',
        color: '#FFF',
        padding: '15px',
        marginTop: '1%',
      }}
      fluid
    >
      <RBS.Row>
        <RBS.Col md={12}>
          <RBS.Row>
            <RBS.Col md={3}>
              <div style={{ fontSize: '18px', marginLeft: '25px' }}>HELP</div>
              <ul>
                <li>
                  <a
                    href="javascript:;"
                    style={{
                      textDecoration: 'none',
                      fontSize: '14px',
                      color: '#FFF',
                    }}
                  >
                    {' '}
                    Payments
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    style={{
                      textDecoration: 'none',
                      fontSize: '14px',
                      color: '#FFF',
                    }}
                  >
                    Shipping
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    style={{
                      textDecoration: 'none',
                      fontSize: '14px',
                      color: '#FFF',
                    }}
                  >
                    Cancellation & Returns
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    style={{
                      textDecoration: 'none',
                      fontSize: '14px',
                      color: '#FFF',
                    }}
                  >
                    Report Infringement
                  </a>
                </li>
              </ul>
            </RBS.Col>
            <RBS.Col md={3}>
              <div style={{ fontSize: '18px', marginLeft: '25px' }}>POLICY</div>
              <ul>
                <li>
                  <a
                    href="javascript:;"
                    style={{
                      textDecoration: 'none',
                      fontSize: '14px',
                      color: '#FFF',
                    }}
                  >
                    {' '}
                    Return Policy
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    style={{
                      textDecoration: 'none',
                      fontSize: '14px',
                      color: '#FFF',
                    }}
                  >
                    Terms Of Use
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    style={{
                      textDecoration: 'none',
                      fontSize: '14px',
                      color: '#FFF',
                    }}
                  >
                    Security
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    style={{
                      textDecoration: 'none',
                      fontSize: '14px',
                      color: '#FFF',
                    }}
                  >
                    Privacy
                  </a>
                </li>
              </ul>
            </RBS.Col>
            <RBS.Col md={3}>
              <div style={{ fontSize: '18px', marginLeft: '25px' }}>ABOUT</div>
              <ul>
                <li>
                  <a
                    href="javascript:;"
                    style={{
                      textDecoration: 'none',
                      fontSize: '14px',
                      color: '#FFF',
                    }}
                  >
                    {' '}
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    style={{
                      textDecoration: 'none',
                      fontSize: '14px',
                      color: '#FFF',
                    }}
                  >
                    About Us
                  </a>
                </li>
              </ul>
            </RBS.Col>

            <RBS.Col md={3}>
              <div style={{ fontSize: '18px' }}>Follow us</div>
              <br />
              <FontAwesomeIcon
                icon={faFacebook}
                style={{ fontSize: '36px', marginLeft: '5px' }}
              />{' '}
              <FontAwesomeIcon
                icon={faTwitter}
                style={{ fontSize: '36px', marginLeft: '5px' }}
              />{' '}
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ fontSize: '36px', marginLeft: '5px' }}
              />{' '}
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ fontSize: '36px', marginLeft: '5px' }}
              />{' '}
            </RBS.Col>
          </RBS.Row>
        </RBS.Col>
        <RBS.Col md={12}>
          <hr style={{ borderBottom: '1px solid #ffffff' }} />
          <RBS.Row>
            <RBS.Col md={8}>
              <a
                href="javascript:;"
                style={{
                  textDecoration: 'none',
                  fontSize: '12px',
                  color: '#FFF',
                }}
              >
                About us
              </a>{' '}
              {'|'}{' '}
              <a
                href="javascript:;"
                style={{
                  textDecoration: 'none',
                  fontSize: '12px',
                  color: '#FFF',
                }}
              >
                Advertise us
              </a>{' '}
              {'|'}{' '}
              <a
                href="javascript:;"
                style={{
                  textDecoration: 'none',
                  fontSize: '12px',
                  color: '#FFF',
                }}
              >
                Contact us
              </a>{' '}
              {'|'}{' '}
              <a
                href="javascript:;"
                style={{
                  textDecoration: 'none',
                  fontSize: '12px',
                  color: '#FFF',
                }}
              >
                Sitemap
              </a>{' '}
              {'|'}{' '}
              <a
                href="javascript:;"
                style={{
                  textDecoration: 'none',
                  fontSize: '12px',
                  color: '#FFF',
                }}
              >
                Term of use
              </a>{' '}
              {'|'}{' '}
              <a
                href="javascript:;"
                style={{
                  textDecoration: 'none',
                  fontSize: '12px',
                  color: '#FFF',
                }}
              >
                Privacy Policy
              </a>{' '}
              {'|'}{' '}
              <a
                href="javascript:;"
                style={{
                  textDecoration: 'none',
                  fontSize: '12px',
                  color: '#FFF',
                }}
              >
                Feedback
              </a>{' '}
            </RBS.Col>
            <RBS.Col md={4}>
              <span
                style={{
                  textDecoration: 'none',
                  fontSize: '12px',
                  color: '#FFF',
                }}
              >
                Copyright © 2021 Powered By Span App Software Pvt. Ltd. All
                Rights Reserved.
              </span>
            </RBS.Col>
          </RBS.Row>
        </RBS.Col>
      </RBS.Row>
    </RBS.Container>
  );
}

export default Footer;
