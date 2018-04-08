import {
  REMOVE_PRODUCT_IN_CART,
  ADD_TO_CART,
} from './types';

const initialState = [];

const cartsReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        return [...state.filter(cart => cart.id !== action.cart.id), Object.assign({}, action.cart)];
      case REMOVE_PRODUCT_IN_CART:      
        return [...state.filter(cart => cart.id !== action.cart)];
      default:
        return state;
    }
  };
  
  export default cartsReducer;