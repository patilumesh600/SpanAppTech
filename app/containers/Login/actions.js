/*
 *
 * Login actions
 *
 */

import * as Constants from './constants';
// import { DEFAULT_ACTION, LOGIN } from './constants';

export function defaultAction() {
  return {
    type: Constants.DEFAULT_ACTION,
  };
}

export function login(loginName, password) {
  debugger;
  return {
    type: Constants.LOGIN,
    loginName,
    password,   
  };
}

