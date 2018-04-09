import {
  GET_PRODUCTS,
} from './types';

const initialState = [];

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_PRODUCTS:
        return [...action.products];
      default:
        return state;
    }
  };
  
  export default productsReducer;