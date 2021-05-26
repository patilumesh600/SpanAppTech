/**
 *
 * Filters
 *
 */

import React from 'react';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './filter.css';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Filters() {
  return (
    <div style={{ paddingTop: '10%', color: '#8c8c8c' }}>
      <h5>
        <FontAwesomeIcon icon={faFilter} /> Filters
      </h5>
      <hr />
      <div>
        <h6>
          By Categories{' '}
          <small className="pullRight">
            {' '}
            <a href="/">View All</a>
          </small>
        </h6>
        <input
          type="checkbox"
          id="fltCat1"
          name="FilterByCategory"
          value="Flt1"
        />
        <label htmlFor="fltCat1"> &nbsp; Writing Instruments</label>
        <br />
        <input
          type="checkbox"
          id="fltCat2"
          name="FilterByCategory"
          value="Flt1"
        />
        <label htmlFor="fltCat2"> &nbsp; Notebooks & Diaries</label>
      </div>
      <div style={{ marginTop: '10px' }}>
        <h6>
          By Brand{' '}
          <small className="pullRight">
            {' '}
            <a href="/">View All</a>
          </small>
        </h6>
        <input
          type="checkbox"
          id="fltCat1"
          name="FilterByCategory"
          value="Flt1"
        />
        <label htmlFor="fltCat1"> &nbsp; Cello </label>
        <br />
        <input
          type="checkbox"
          id="fltCat2"
          name="FilterByCategory"
          value="Flt1"
        />
        <label htmlFor="fltCat2"> &nbsp; Camel </label>
        <br />
        <input
          type="checkbox"
          id="fltCat3"
          name="FilterByCategory"
          value="Flt1"
        />
        <label htmlFor="fltCat3"> &nbsp; Maxell </label>
        <br />
        <input
          type="checkbox"
          id="fltCat4"
          name="FilterByCategory"
          value="Flt1"
        />
        <label htmlFor="fltCat4"> &nbsp; Daler Rowney </label>
        <br />
      </div>

      <div style={{ marginTop: '10px' }}>
        <h6>
          By Type{' '}
          <small className="pullRight">
            {' '}
            <a href="/">View All</a>
          </small>
        </h6>
        <input
          type="checkbox"
          id="fltCat1"
          name="FilterByCategory"
          value="Flt1"
        />
        <label htmlFor="fltCat1"> &nbsp; Notebook </label>
        <br />
        <input
          type="checkbox"
          id="fltCat2"
          name="FilterByCategory"
          value="Flt1"
        />
        <label htmlFor="fltCat2"> &nbsp; Book </label>
        <br />
      </div>

      <div style={{ marginTop: '10px' }}>
        <h6>By Price </h6>
      </div>
      <div className="slidecontainer">
        <input type="range" min="1" max="100" value="50" id="myRange" />
      </div>
    </div>
  );
}

Filters.propTypes = {};

export default Filters;
