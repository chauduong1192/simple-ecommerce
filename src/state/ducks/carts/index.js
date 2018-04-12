import {
  addToCart,
  addLocalDataToCart,
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
  addLocalDataToCart,
  checkout,
  changeQuantity,
  removeProductInCart,
  openCart,
  // selectors
  cartsSelectors,
};

export default cartsReducers;
