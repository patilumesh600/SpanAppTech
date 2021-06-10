import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the supplierProduct state domain
 */

const selectSupplierProductDomain = state =>
  state.supplierProduct || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by SupplierProduct
 */

const makeSelectSupplierProduct = () =>
  createSelector(
    selectSupplierProductDomain,
    substate => substate,
  );

export default makeSelectSupplierProduct;
export { selectSupplierProductDomain };
