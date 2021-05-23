/*
 *
 * Dashboard reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION } from './constants';

export const initialState = {
  activeItemIndex1: '1',
};

/* eslint-disable default-case, no-param-reassign */
const dashboardReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        activeItemIndex1 = '222';
        break;
    }
  });

export default dashboardReducer;
