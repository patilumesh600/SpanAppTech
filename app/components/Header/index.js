import React, { useEffect, useState, memo } from 'react';
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";
// import { FormattedMessage } from 'react-intl';

// import A from './A';
// import Img from './Img';
// import NavBar from './NavBar';
// import HeaderLink from './HeaderLink';
// import Banner from './banner.jpg';
// import messages from './messages';

import Sidebar from "./sidebar.js";
// import "./sidebar.css";

function Header() {
  // return (
  //   <div>


  //     <Container fluid>
  //       <Row>
  //         <Col xs={2} id="sidebar-wrapper">
  //           <Sidebar />
  //         </Col>
  //         <Col xs={10} id="page-content-wrapper">
  //           this is a test
  //                   </Col>
  //       </Row>

  //     </Container>



  //     {/* <A href="https://www.reactboilerplate.com/">
  //       <Img src={Banner} alt="react-boilerplate - Logo" />
  //     </A> */}
      
  //     <div style={{ background: '#2874f0', padding: '1%', color: '#FFF' }}>
  //       <div>
  //         <a href="/"><img width="75" src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="Flipkart" title="Flipkart" className="_2xm1JU" /></a>
  //         <span style={{ fontWeight: 'bold' }}> Span</span>

          
  //       <div className="form-group" style={{display: 'inline', marginLeft: '20%' }}>
            
  //           <input style={{display: 'inline', width: '30%' }} type="email" className="form-control" placeholder="Search for products, brands and more" />
  //       </div>

  //       <div style={{display: 'inline', marginLeft: '35%' }} >
  //         <a href="#"><svg width="35" height="40" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
  //           <path d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="#fff"></path>
  //           </svg>
  //           <span style={{ color: '#FFF', marginLeft: '1%' }}><b>Cart</b></span>
  //           </a>
  //         </div>

  //       </div>
        
  //     </div>

  //     {/* <NavBar>
  //       <HeaderLink to="/">
  //         <FormattedMessage {...messages.home} />
  //       </HeaderLink>
  //       <HeaderLink to="/features">
  //         <FormattedMessage {...messages.features} />
  //       </HeaderLink>
  //     </NavBar> */}
  //   </div>
  // );

  const [isActive, setActive] = useState(false);
  const className = isActive ? "toggled" : "d-flex";

  const handleToggle = () => {
    debugger;
    setActive(!isActive);
  };

  return (
    <div class={className} id="wrapper">
      <div class="bg-light border-right" id="sidebar-wrapper">
        <div class="sidebar-heading">Start Bootstrap</div>
        <div class="list-group list-group-flush">
          <a href="#" class="list-group-item list-group-item-action bg-light">
            Dashboard
          </a>
        </div>
        <div class="list-group list-group-flush">
          <a href="#" class="list-group-item list-group-item-action bg-light">
            Dashboard1
          </a>
        </div>
      </div>
      <div id="page-content-wrapper">
        <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
          <button
            class="btn btn-primary"
            id="menu-toggle"
            onClick={() => handleToggle()}
          >
            Toggle Menu
          </button>
        </nav>

        <div class="container-fluid"></div>
      </div>
    </div>
  );
}

export default Header;
