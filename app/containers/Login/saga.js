/**
 * Gets the repositories of the user from Github
 */

 import { call, put, all, select, takeLatest } from 'redux-saga/effects';
 import * as Constants from './constants';
 // import { LOGIN } from './constants';


 
 /**
  * Github repos request/response handler
  */
 export function* login(action) {
   debugger;
   alert(123);
 }
 
 /**
  * Root saga manages watcher lifecycle
  */
 export default function* loginSaga() {
   debugger;
   // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
   // By using `takeLatest` only the result of the latest API call is applied.
   // It returns task descriptor (just like fork) so we can continue execution
   // It will be cancelled automatically on component unmount
   yield all([
    yield takeLatest(Constants.LOGIN, login),
  ]);
 }