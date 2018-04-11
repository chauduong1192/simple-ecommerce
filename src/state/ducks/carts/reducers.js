import {
  ADD_TO_CART,
  CHECKOUT,
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
      // Add products in cart to localstore
      const data = [...state.lists.filter(cart => cart.id !== newProduct.id), Object.assign({}, newProduct)];
      localStorage.setItem('products-in-cart', JSON.stringify(data));
      return {
        lists: [...state.lists.filter(cart => cart.id !== newProduct.id), Object.assign({}, newProduct)],
        isModal: true
      }
    }
    case CHECKOUT:
      return {
        ...state,
        lists: [],
        isModal: false,
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
      // Remove products-in-cart in localstore and set again.
      const data = [...state.lists.filter(cart => cart.id !== newProduct.id), Object.assign({}, newProduct)];
      localStorage.removeItem('products-in-cart');
      localStorage.setItem('products-in-cart', JSON.stringify(data));
      return {
        lists: [...state.lists.filter(cart => cart.id !== newProduct.id), Object.assign({}, newProduct)],
        isModal: true
      }
    }
    case REMOVE_PRODUCT_IN_CART: {
      // Remove products-in-cart in localstore and set again.
      const data = [...state.lists.filter(cart => cart.id !== action.cart)];
      localStorage.removeItem('products-in-cart');
      localStorage.setItem('products-in-cart', JSON.stringify(data));
      return {
        lists: [...state.lists.filter(cart => cart.id !== action.cart)],
        isModal: true
      }
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
