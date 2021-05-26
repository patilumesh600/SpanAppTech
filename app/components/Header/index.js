import React from 'react';
import * as RBS from 'react-bootstrap';
// import { Container, Row, Col } from 'react-bootstrap';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const handleLoginBtnChange = e => {
  console.log(e);
  window.location = '/login';
};

function Header() {
  return (
  // <div
  //   className="row col-md-12"
  //   style={{
  //     background: '#4f9fcf',
  //     padding: '1%',
  //     color: '#FFF',
  //     margin: '0px',
  //   }}
  // >
  //   <div className="col-md-4">
  //     <a href="/">
  //       <img
  //         width="75"
  //         src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
  //         alt="Flipkart"
  //         title="Flipkart"
  //         className="_2xm1JU"
  //       />
  //     </a>
  //     <span style={{ fontWeight: 'bold' }}> Span</span>
  //   </div>
  //   <div className="col-md-4">
  //     <input
  //       style={{ display: 'inline', width: '100%' }}
  //       type="email"
  //       className="form-control"
  //       placeholder="Search for products, brands and more"
  //     />
  //   </div>
  //   <div className="col-md-4 text-right">
  //     <a href="#">
  //       <svg
  //         width="35"
  //         height="40"
  //         viewBox="0 0 16 16"
  //         xmlns="http://www.w3.org/2000/svg"
  //       >
  //         <path
  //           d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86"
  //           fill="#fff"
  //         />
  //       </svg>
  //     </a>

  //     <button
  //       type="button"
  //       onClick={e => {
  //         handleLoginBtnChange(e);
  //       }}
  //       className="btn"
  //       style={{
  //         background: '#FFF',
  //         fontWeight: '500',
  //         color: 'blue',
  //         marginLeft: '5%',
  //       }}
  //     >
  //       Login
  //     </button>
  //   </div>
  // </div>

    // <RBS.Navbar style={{ background: '#4f9fcf' }} variant="light" fixed="top">
    //   <RBS.Nav inline className="col-md-3 col-sm-12 col-xs-12">
    //     <span style={{ color: '#FFF' }}>
    //       <b>SpanShopping</b>
    //     </span>
    //   </RBS.Nav>
    //   <RBS.Nav className="col-md-6 col-sm-12 col-xs-12">
    //     <RBS.Form className="col-md-12 col-xs-12">
    //       <RBS.Col xs={{ span: 12 }} md={{ span: 12 }}>
    //         <RBS.InputGroup>
    //           <RBS.FormControl
    //             placeholder="Search for products, brands and more"
    //             aria-label="Search for products, brands and more"
    //             aria-describedby="basic-addon2"
    //           />
    //           <RBS.InputGroup.Append>
    //             <RBS.Button variant="dark">
    //               <FontAwesomeIcon icon={faSearch} />
    //             </RBS.Button>
    //           </RBS.InputGroup.Append>
    //         </RBS.InputGroup>
    //       </RBS.Col>
    //     </RBS.Form>
    //   </RBS.Nav>

    //   <RBS.Nav inline className="col-md-3 sm-12 xs-12">
    //     <RBS.InputGroup className="text-right">
    //       <RBS.Button variant="primary">Login</RBS.Button>
    //     </RBS.InputGroup>
    //   </RBS.Nav>
    // </RBS.Navbar>

    // <RBS.Row style={{ background: '#4f9fcf',padding: '1%',width:'102%',position:'fixed' }} >
    // <RBS.Col xs={12} md={3} className="text-left">
    //   <span style={{ color: '#FFF', fontSize:'20px' }}>
    //     <b>SpanShopping</b>
    //   </span>
    //   </RBS.Col>
    //   <RBS.Col xs={12} md={6}>
    //     search
    //   </RBS.Col>
    //   <RBS.Col xs={12} md={3} className="text-right">
    //     <RBS.Button style={{ color: '#FFF', fontWeight: '700' }} variant="info">Login</RBS.Button>
    //   </RBS.Col>
    // </RBS.Row>

    <RBS.Navbar style={{ background: '#4f9fcf' }} variant="light" fixed="top">
      <RBS.Navbar.Brand href="#home" style={{ color: '#FFF' }}>
        <span>
          <b>SpanShoppping</b>
        </span>
      </RBS.Navbar.Brand>

      <RBS.Nav className="mr-auto col-md-8 d-none d-lg-block">
        <RBS.Form inline className="col-md-12">
          <RBS.Col md={{ span: 10, offset: 1 }}>
            <RBS.InputGroup className="mb-7">
              <RBS.FormControl
                placeholder="Search for products, brands and more"
                aria-label="Search for products, brands and more"
                aria-describedby="basic-addon2"
              />
              <RBS.InputGroup.Append>
                <RBS.Button variant="info">
                  <FontAwesomeIcon icon={faSearch} />
                </RBS.Button>
              </RBS.InputGroup.Append>
            </RBS.InputGroup>
          </RBS.Col>
        </RBS.Form>
      </RBS.Nav>

      <RBS.Nav inline className="d-none d-lg-block">
        <a href="#">
          <svg
            width="35"
            height="40"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86"
              fill="#fff"
            />
          </svg>
        </a>
      </RBS.Nav>

      <RBS.Nav
        inline
        className="d-none d-lg-block"
        style={{ marginLeft: '1%' }}
      >
        <RBS.Button
          onClick={e => {
            handleLoginBtnChange(e);
          }}
          style={{ color: '#4f9fcf', background: '#FFF', fontWeight: '500' }}
          variant="info"
        >
          Login
        </RBS.Button>
      </RBS.Nav>

      {/* <RBS.Nav inline >
        <RBS.NavDropdown
          title="Sanket Deshmukh"
          id="collasible-nav-dropdown"
          menuAlign="left"
        >
          <RBS.NavDropdown.Item href="#action/3.1">Action</RBS.NavDropdown.Item>
          <RBS.NavDropdown.Item href="#action/3.2">
            Another action
          </RBS.NavDropdown.Item>
          <RBS.NavDropdown.Item href="#action/3.3">
            Something
          </RBS.NavDropdown.Item>
          <RBS.NavDropdown.Divider />
          <RBS.NavDropdown.Item href="#action/3.4">
            Separated link
          </RBS.NavDropdown.Item>
        </RBS.NavDropdown>
      </RBS.Nav> */}
    </RBS.Navbar>
  );
}

export default Header;
