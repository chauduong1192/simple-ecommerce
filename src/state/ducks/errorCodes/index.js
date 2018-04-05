import {
  getErrorCodes,
  getErrorCode,
  createErrorCode,
  updateErrorCode,
  deleteErrorCode
} from './actions';
import * as errorCodesSelectors from './selectors';
import errorCodesReducers from './reducers';

export {
  // actions
  getErrorCodes,
  getErrorCode,
  createErrorCode,
  updateErrorCode,
  deleteErrorCode,
  // selectors
  errorCodesSelectors,
};

export default errorCodesReducers;