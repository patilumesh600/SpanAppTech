import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the dashboardNew state domain
 */

const selectDashboardNewDomain = state => state.dashboardNew || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by DashboardNew
 */

const makeSelectDashboardNew = () =>
  createSelector(
    selectDashboardNewDomain,
    substate => substate,
  );

export default makeSelectDashboardNew;
export { selectDashboardNewDomain };
