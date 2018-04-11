import {
  ADD_TO_CART,
  CHANGE_QUANTITY,
  REMOVE_PRODUCT_IN_CART,
  OPEN_CART,
} from './types';

const initialState = {
  lists: [],
  isModal: false
};

const cartsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const newProduct = action.cart;
      const oldProduct = state.lists.find(product => product.id === newProduct.id);
      const availableQuantity = newProduct.availableQuantity;
      const totalQuantity = (oldProduct && (newProduct.quantity + oldProduct.quantity)) || newProduct.quantity;
      if(oldProduct) {
        if(totalQuantity <= availableQuantity){
          newProduct.quantity += oldProduct.quantity;
        }else {
          newProduct.quantity = availableQuantity;
          newProduct.isError = true;
        }
      }else {
        newProduct.isError = false;
      }
      return {
        lists: [...state.lists.filter(cart => cart.id !== newProduct.id), Object.assign({}, newProduct)],
        isModal: true
      }
    }
    case CHANGE_QUANTITY: {
      const newProduct = action.cart;
      const oldProduct = state.lists.find(product => product.id === newProduct.id);
      const availableQuantity = newProduct.availableQuantity;
      const currentQuantity = newProduct.quantity;
      if(oldProduct) {
        newProduct.quantity = (currentQuantity > availableQuantity) ? availableQuantity : currentQuantity;
        newProduct.isError = (currentQuantity > availableQuantity) && true;
      }else {
        newProduct.isError = false;
      }
      return {
        lists: [...state.lists.filter(cart => cart.id !== newProduct.id), Object.assign({}, newProduct)],
        isModal: true
      }
    }
    case REMOVE_PRODUCT_IN_CART:      
      return {
        lists: [...state.lists.filter(cart => cart.id !== action.cart)],
        isModal: true
      }
    case OPEN_CART:      
      return {
        ...state,
        isModal: action.isModal
      }
    default:
      return state;
  }
};
  
export default cartsReducer;
