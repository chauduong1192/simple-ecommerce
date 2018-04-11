import {
  addToCart,
  checkout,
  changeQuantity,
  removeProductInCart,
  openCart
} from './actions';
import * as cartsSelectors from './selectors';
import cartsReducers from './reducers';

export {
  // actions
  addToCart,
  checkout,
  changeQuantity,
  removeProductInCart,
  openCart,
  // selectors
  cartsSelectors,
};

export default cartsReducers;
