import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import messages from './messages';

function Footer() {
  return (
    <Wrapper style={{ padding: '1%', background: '#2874f0', color: '#FFF' }}>
      <section>
      <div>
        <a style={{ color: '#FFF' }} id="divTOU" href="#">Terms of Use</a> | <a style={{ color: '#FFF' }} id="divPRV" href="#">Privacy Policy</a>
      </div>
      </section>
      {/* <section>
        <LocaleToggle />
      </section> */}
      <section>
        {/* <FormattedMessage
          {...messages.authorMessage}
          values={{
            author: <A href="https://twitter.com/mxstbr">Max Stoiber</A>,
          }}
        /> */}
        All Rights Reserved, @2021 <a style={{ color: '#FFF' }} href="#">Powered by Span</a>
      </section>
    </Wrapper>
  );
}

export default Footer;
