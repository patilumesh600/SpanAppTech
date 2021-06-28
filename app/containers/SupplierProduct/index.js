/* eslint-disable react/button-has-type */
/**
 *
 * SupplierProduct
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import {
  faEnvelope,
  faAddressCard,
  faPhone,
  faCartPlus,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import {} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as RBS from 'react-bootstrap';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectSupplierProduct from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';
import personaldetails from '../../json/myprofile.json';
// import './card.css';
import productDetails from '../../json/searchResult.json';

export function SupplierProduct() {
  useInjectReducer({ key: 'supplierProduct', reducer });
  useInjectSaga({ key: 'supplierProduct', saga });

  // return (
  //   <div>
  //     <Helmet>
  //       <title>Supplier Product</title>
  //       <meta name="description" content="Description of SupplierProduct" />
  //     </Helmet>
  //     <FormattedMessage {...messages.header} />
  //   </div>
  // );

  return (
    <div id="divUserProfile">
      <RBS.Row>
        <RBS.Col>
          <RBS.Row
            style={{ background: '#4f9fcf', color: '#FFF', padding: '0.2%' }}
          >
            <RBS.Col xs={12} md={2}>
              <RBS.Image
                src={personaldetails.ImageURL1}
                roundedCircle
                height="100"
                width="100"
              />
            </RBS.Col>
            <RBS.Col xs={12} md={4}>
              <div
                className="center"
                style={{ fontSize: '18px', fontWeight: '600' }}
              >
                Phoenix Supplier
              </div>
              <div className="center" style={{ fontSize: '15px' }}>
                {' '}
                <FontAwesomeIcon icon={faPhone} />
                &nbsp;&nbsp;
                {personaldetails.MobileNumber}&nbsp;&nbsp; <br />
                <FontAwesomeIcon icon={faEnvelope} />
                &nbsp;
                {personaldetails.EmailAddress1}
                <br />
                <FontAwesomeIcon icon={faAddressCard} />
                &nbsp;&nbsp;
                {personaldetails.Address}
              </div>
            </RBS.Col>
          </RBS.Row>
          <RBS.Row style={{ marginTop: '1%' }}>
            <RBS.Col xs={12} md={12}>
              <RBS.CardDeck>
                {productDetails.map(data => getDetails(data))}
              </RBS.CardDeck>
            </RBS.Col>
          </RBS.Row>
          <RBS.Row style={{ marginTop: '1%' }}>
            <RBS.Col xs={12} md={12}>
              <RBS.CardDeck>
                {productDetails.map(data => getDetails(data))}
              </RBS.CardDeck>
            </RBS.Col>
          </RBS.Row>
          <RBS.Row>
            {/* <RBS.Col
              md={3}
              style={{
                border: '1px solid #e1e1e1',
                background: '#4f9fcf',
                color: '#FFF',
              }}
            >
              <RBS.Row style={{ padding: '15px 0px', marginBottom: '5px' }}>
                <RBS.Col xs={12} md={12} style={{ textAlign: 'center' }}>
                  <RBS.Image
                    src={personaldetails.ImageURL1}
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
                    Phoenix Supplier
                  </div>
                  <div className="center" style={{ fontSize: '15px' }}>
                    {' '}
                    <FontAwesomeIcon icon={faPhone} />
                    &nbsp;&nbsp;
                    {personaldetails.MobileNumber}&nbsp;&nbsp; <br />
                    <FontAwesomeIcon icon={faEnvelope} />
                    &nbsp;
                    {personaldetails.EmailAddress1}
                    <br />
                    <FontAwesomeIcon icon={faAddressCard} />
                    &nbsp;&nbsp;
                    {personaldetails.Address}
                  </div>
                </RBS.Col>
              </RBS.Row>
            </RBS.Col> */}
            <RBS.Col md={12}>
              {/* <RBS.Card className="profile-card">
                <div className="card">
                  <img
                    src="https://www.w3schools.com/w3images/jeans3.jpg"
                    alt="Denim Jeans"
                    style={{ width: '100%' }}
                  />
                  <h1>Tailored Jeans</h1>
                  <p className="price">$19.99</p>
                  <p>Some text about the jeans..</p>
                  <p>
                    <button>Add to Cart</button>
                  </p>
                </div>
              </RBS.Card> */}
              {/* <RBS.Row>
                <RBS.CardDeck>
                  {productDetails.map(data => getDetails(data))}
                </RBS.CardDeck>
                <br />
                <RBS.CardDeck>
                  {productDetails.map(data => getDetails(data))}
                </RBS.CardDeck>
                <br />
                <RBS.CardDeck>
                  {productDetails.map(data => getDetails(data))}
                </RBS.CardDeck>
                <br />
                <RBS.CardDeck>
                  {productDetails.map(data => getDetails(data))}
                </RBS.CardDeck>
              </RBS.Row> */}
            </RBS.Col>
          </RBS.Row>
        </RBS.Col>
      </RBS.Row>
    </div>
  );
}

function getDetails(data) {
  return (
    <RBS.Card md={3} style={{ height: '300px' }}>
      <div style={{ padding: '1% 10% 0px 10%' }}>
        <RBS.Card.Img
          variant="top"
          src={data.ImagePath}
          style={{ height: '125px' }}
        />
      </div>
      <RBS.Card.Body>
        <RBS.Card.Title>{data.Name}</RBS.Card.Title>
        <RBS.Card.Text>
          <span>
            {' '}
            <RBS.Badge pill variant="success">
              {data.Rating} <FontAwesomeIcon icon={faStar} />
            </RBS.Badge>{' '}
          </span>
          <span className="upcoming-span">({data.Review}) Reviews</span>
          <br />
          <h5>{data.PriceRange}</h5>
        </RBS.Card.Text>
      </RBS.Card.Body>
      <RBS.Card.Footer className="text-center">
        <small className="text-muted">
          <RBS.Button
            style={{ width: '100%', padding: '1%', fontSize: '18px' }}
            type="button"
            size="sm"
          >
            {' '}
            <FontAwesomeIcon icon={faCartPlus} /> Add to Cart
          </RBS.Button>
        </small>
      </RBS.Card.Footer>
    </RBS.Card>
  );
}

SupplierProduct.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  supplierProduct: makeSelectSupplierProduct(),
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
)(SupplierProduct);
