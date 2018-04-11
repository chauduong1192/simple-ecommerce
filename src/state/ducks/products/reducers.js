import {
  GET_PRODUCTS,
} from './types';

const initialState = {
  lists: [],
  product: {}
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        lists: [...action.products]
      }
    default:
      return state;
  }
};
  
export default productsReducer;
