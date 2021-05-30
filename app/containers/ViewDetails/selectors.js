import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the viewDetails state domain
 */

const selectViewDetailsDomain = state => state.viewDetails || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ViewDetails
 */

const makeSelectViewDetails = () =>
  createSelector(
    selectViewDetailsDomain,
    substate => substate,
  );

export default makeSelectViewDetails;
export { selectViewDetailsDomain };
