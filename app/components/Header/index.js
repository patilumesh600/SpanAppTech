import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';

function Header() {
  return (
    <div>
      {/* <A href="https://www.reactboilerplate.com/">
        <Img src={Banner} alt="react-boilerplate - Logo" />
      </A> */}
      
      <div style={{ background: '#2874f0', padding: '1%', color: '#FFF' }}>
        <div>
          <a href="/"><img width="75" src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="Flipkart" title="Flipkart" className="_2xm1JU" /></a>
          <span style={{ fontWeight: 'bold' }}> Span</span>
        </div>
        
      </div>

      {/* <NavBar>
        <HeaderLink to="/">
          <FormattedMessage {...messages.home} />
        </HeaderLink>
        <HeaderLink to="/features">
          <FormattedMessage {...messages.features} />
        </HeaderLink>
      </NavBar> */}
    </div>
  );
}

export default Header;
