import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the orderSummary state domain
 */

const selectOrderSummaryDomain = state => state.orderSummary || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by OrderSummary
 */

const makeSelectOrderSummary = () =>
  createSelector(
    selectOrderSummaryDomain,
    substate => substate,
  );

export default makeSelectOrderSummary;
export { selectOrderSummaryDomain };
