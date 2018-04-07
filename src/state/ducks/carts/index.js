import {
  addToCart,
  removeProductInCart
} from './actions';
import * as cartsSelectors from './selectors';
import cartsReducers from './reducers';

export {
  // actions
  addToCart,
  removeProductInCart,
  // selectors
  cartsSelectors,
};

export default cartsReducers;