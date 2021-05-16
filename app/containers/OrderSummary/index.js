/**
 *
 * OrderSummary
 *
 */

 import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectOrderSummary from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
// import './quantity.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './orderSummary.css';
// import {
//   faEye,
//   faCalendarAlt,
//   faStar,
// } from '@fortawesome/free-regular-svg-icons';
import { faLongArrowAltLeft, faAngleDown, faTrash} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function OrderSummary() {
  useInjectReducer({ key: 'orderSummary', reducer });
  useInjectSaga({ key: 'orderSummary', saga });

  const [quantyValue, setQuantityValue] = useState(1);
  const handleIncrementDecrementValue = (e, mode) => {
    e.preventDefault();
      if(mode==='I'){
        setQuantityValue(quantyValue+1);
      } else if(quantyValue>1) {
        setQuantityValue(quantyValue-1);
      }
    };
 
  return (
    <div style={{ background: '#FFF' }}>
      <Helmet>
        <title>OrderSummary</title>
        <meta name="description" content="Description of OrderSummary" />
      </Helmet>
      {/* <FormattedMessage {...messages.header} /> */}

    {/* <div className="cart_section">
      <div className="container-fluid">
        <div className="row">
            <div className="col-lg-10 offset-lg-1">
                <div className="cart_container">
                    <div className="cart_title">Shopping Cart
                    </div>
                    <div className="cart_items">
                        <ul className="">
                            <li className="clearfix">
                                <div className="cart_item_info1 d-flex flex-md-row flex-column justify-content-between">
                                    <div className="cart_item_name cart_info_col">                                                                               
                                    </div>
                                    <div className="cart_item_name cart_info_col">
                                        <div className="cart_item_title1">Name</div>                                        
                                    </div>
                                    <div className="cart_item_quantity cart_info_col">
                                        <div className="cart_item_title1">Quantity</div>
                                    </div>
                                    <div className="cart_item_price cart_info_col">
                                        <div className="cart_item_title1">Price</div>
                                    </div>
                                    <div className="cart_item_total cart_info_col">
                                        <div className="cart_item_title1">Total</div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="cart_items">
                        <ul className="cart_list">
                            <li className="cart_item clearfix">
                                <div className="cart_item_image textAlignCenter"><img src="https://i.imgur.com/qqBRWD5.jpg" alt="" /></div>
                                <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                                    <div className="cart_item_name cart_info_col">
                                        <div className="cart_item_text">Samsung C7 Pro</div>
                                    </div>
                                    <div className="cart_item_quantity cart_info_col">
                                        <div className="cart_item_text">1</div>
                                    </div>
                                    <div className="cart_item_price cart_info_col">
                                        <div className="cart_item_text">₹22000</div>
                                    </div>
                                    <div className="cart_item_total cart_info_col">
                                        <div className="cart_item_text">₹22000 <FontAwesomeIcon style={{ marginLeft: '5px' }} icon={faTrash} /> </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="cart_items">
                        <ul className="cart_list">
                            <li className="cart_item clearfix">
                                <div className="cart_item_image textAlignCenter"><img src="https://i.imgur.com/qqBRWD5.jpg" alt="" /></div>
                                <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                                    <div className="cart_item_name cart_info_col">
                                        <div className="cart_item_text">Nokkia new one </div>
                                    </div>
                                    <div className="cart_item_quantity cart_info_col">
                                        <div className="cart_item_text">2</div>
                                    </div>
                                    <div className="cart_item_price cart_info_col">
                                        <div className="cart_item_text">₹44000</div>
                                    </div>
                                    <div className="cart_item_total cart_info_col">
                                        <div className="cart_item_text">₹88000<FontAwesomeIcon style={{ marginLeft: '5px' }} icon={faTrash} /> </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="order_total">
                        <div className="order_total_content text-md-right">
                            <div className="order_total_title"><b>Order Total:</b></div>
                            <div className="order_total_amount">₹1,10000</div>
                        </div>
                    </div>
                    <div className="cart_buttons"> <button type="button" className="button cart_button_clear">Continue Shopping</button> <button type="button" className="button cart_button_checkout">Checkout</button> </div>
                </div>
            </div>
        </div>
    </div>
    </div>  */}


          <div style={{ background: '#FFF' }}>
              <div className="col-lg-10 offset-lg-1 fontSize18px padd0" style={{ fontWeight: '500' }}>
                  Shopping Cart
          </div>

              <div className="col-lg-10 offset-lg-1 fontSize18px">
                  <div className="row col-md-12 textAlignCenter">
                      <div className="col-md-1">

                      </div>
                      <div className="col-md-2">
                          Name
                        </div>
                      <div className="col-md-2">
                          Quantity
                        </div>
                      <div className="col-md-2">
                          Price
                        </div>
                      <div className="col-md-2">
                          Discount
                        </div>
                      <div className="col-md-2">
                          Total
                        </div>
                      <div className="col-md-1">

                      </div>
                  </div>

                  <div className="row col-md-12 textAlignCenter border1pxSolid">
                      <div className="col-md-1 cart_item_image">
                          <img src="https://i.imgur.com/qqBRWD5.jpg" alt="" />
                      </div>
                      <div className="col-md-2 paddTop1Per">
                          Samsung C7 Pro
                        </div>
                      <div className="col-md-2 paddTop1Per">

                          <div class="input-group" style={{ marginLeft: '15%' }}>
                              <input type="button" value="-" class="button-minus" data-field="quantity" onClick={(e) =>handleIncrementDecrementValue(e,'D')}/>
                              <input type="number" step="1" max="" value={quantyValue} name="quantity" class="quantity-field" />
                              <input type="button" value="+" class="button-plus" data-field="quantity" onClick={(e) =>handleIncrementDecrementValue(e,'I')} />
                          </div>

                      </div>
                      <div className="col-md-2 paddTop1Per">
                          ₹22000
                        </div>
                      <div className="col-md-2 paddTop1Per">
                          0
                        </div>
                      <div className="col-md-2 paddTop1Per">
                          ₹ 22000
                        </div>
                      <div className="col-md-1 paddTop1Per">
                          <FontAwesomeIcon style={{ marginLeft: '5px' }} icon={faTrash} />
                      </div>
                  </div>

                  <div className="row col-md-12 textAlignCenter border1pxSolid">
                      <div className="col-md-1 cart_item_image">
                          <img src="https://i.imgur.com/qqBRWD5.jpg" alt="" />
                      </div>
                      <div className="col-md-2 paddTop1Per">
                          Samsung C7 Pro
                        </div>
                      <div className="col-md-2 paddTop1Per">

                      <div class="input-group" style={{ marginLeft: '15%' }}>
                              <input type="button" value="-" class="button-minus" data-field="quantity" onClick={(e) =>handleIncrementDecrementValue(e,'D')}/>
                              <input type="number" step="1" max="" value={quantyValue} name="quantity" class="quantity-field" />
                              <input type="button" value="+" class="button-plus" data-field="quantity" onClick={(e) =>handleIncrementDecrementValue(e,'I')} />
                      </div>

                      </div>
                      <div className="col-md-2 paddTop1Per">
                          ₹22000
                        </div>
                      <div className="col-md-2 paddTop1Per">
                          0
                        </div>
                      <div className="col-md-2 paddTop1Per">
                          ₹ 22000
                        </div>
                      <div className="col-md-1 paddTop1Per">
                          <FontAwesomeIcon style={{ marginLeft: '5px' }} icon={faTrash} />
                      </div>
                  </div>

                  <div className="row col-md-12 textAlignCenter border1pxSolid">
                      <div className="col-md-1 cart_item_image">
                          <img src="https://i.imgur.com/qqBRWD5.jpg" alt="" />
                      </div>
                      <div className="col-md-2 paddTop1Per">
                          Samsung C7 Pro
                        </div>
                      <div className="col-md-2" style={{ paddingTop: '0.5%' }}>


                      <div class="input-group" style={{ marginLeft: '15%' }}>
                              <input type="button" value="-" class="button-minus" data-field="quantity" onClick={(e) =>handleIncrementDecrementValue(e,'D')}/>
                              <input type="number" step="1" max="" value={quantyValue} name="quantity" class="quantity-field" />
                              <input type="button" value="+" class="button-plus" data-field="quantity" onClick={(e) =>handleIncrementDecrementValue(e,'I')} />
                          </div>


                      </div>
                      <div className="col-md-2 paddTop1Per">
                          ₹22000
                        </div>
                      <div className="col-md-2 paddTop1Per">
                          0
                        </div>
                      <div className="col-md-2 paddTop1Per">
                          ₹ 22000
                        </div>
                      <div className="col-md-1 paddTop1Per">
                          <FontAwesomeIcon style={{ marginLeft: '5px' }} icon={faTrash} />
                      </div>
                  </div>

                  <div className="row col-md-12 textAlignCenter border1pxSolid" style={{ padding: '1%' }}>
                      <div className="col-md-2 offset-md-7 cart_item_image " style={{ textAlign:'right', fontWeight: '500' }}>
                      Order Total:
                      </div>  
                      <div className="col-md-2">
                      ₹ 1,10000
                        </div> 
                        <div className="col-md-1 paddTop1Per">
                            
                        </div>                  
                  </div>

                  <div className="cart_buttons" style={{ marginRight: '1%', marginBottom: '13%' }}> 
                    <button type="button" className="button cart_button_clear">Continue Shopping</button> 
                    <button type="button" className="button cart_button_checkout">Checkout</button> </div>
                  
              </div>
          </div>


    </div>
  );
}

OrderSummary.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  orderSummary: makeSelectOrderSummary(),
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
)(OrderSummary);
