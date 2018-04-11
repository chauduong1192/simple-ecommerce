import {
  getProducts,
} from './actions';
import * as productsSelectors from './selectors';
import productsReducers from './reducers';

export {
  // actions
  getProducts,
  // selectors
  productsSelectors,
};

export default productsReducers;
