/**
 *
 * SearchResult
 *
 */
import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import FilterSec from 'components/Filters';
import * as RBS from 'react-bootstrap';
import { faEye, faCartPlus, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import saga from './saga';
import reducer from './reducer';
import makeSelectSearchResult from './selectors';
import productDetails from '../../json/searchResult.json';

export function SearchResult() {
  useInjectReducer({ key: 'SearchResult', reducer });
  useInjectSaga({ key: 'SearchResult', saga });

  return (
    <RBS.Container fluid style={{ position: 'relative', padding: '0px,15px' }}>
      <RBS.Row>
        <RBS.Col md={2}>
          <FilterSec />
        </RBS.Col>
        <RBS.Col
          md={10}
          style={{ paddingTop: '1%', borderLeft: '1px solid #e1e1e1' }}
        >
          <div style={{ fontSize: '16px' }}>
            <RBS.Row>
              <RBS.Col md={10}>Showing 4 Results </RBS.Col>
              <RBS.Col md={2}>
                <RBS.Form.Control as="select" size="sm" placeholder="Sort By">
                  <option>Relevance</option>
                  <option>Price- High to low</option>
                  <option>Price- Low to High</option>
                </RBS.Form.Control>
              </RBS.Col>
            </RBS.Row>
          </div>
          <hr />
          <RBS.Col md={12}>
            <RBS.Row>
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
            </RBS.Row>
          </RBS.Col>
        </RBS.Col>
      </RBS.Row>
    </RBS.Container>
  );
}

SearchResult.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  SearchResult: makeSelectSearchResult(),
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

function getDetails(data) {
  return (
    <RBS.Card md={3}>
      <RBS.Card.Img variant="top" src={data.ImagePath} />
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
          <RBS.Button variant="info" type="button" size="sm">
            {' '}
            <FontAwesomeIcon icon={faEye} /> View Details
          </RBS.Button>
          &nbsp;&nbsp;&nbsp;
          <RBS.Button variant="success" type="button" size="sm">
            {' '}
            <FontAwesomeIcon icon={faCartPlus} /> Add to Cart
          </RBS.Button>
        </small>
      </RBS.Card.Footer>
    </RBS.Card>
  );
}

export default compose(withConnect)(SearchResult);
