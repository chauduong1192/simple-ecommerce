import {
    ADD_TO_CART,
    REMOVE_PRODUCT_IN_CART
} from './types';

const addToCart = cart => (dispatch) => {
    try {
        dispatch({
            type: ADD_TO_CART,
            cart
        });
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
    }
};

const removeProductInCart = cart => (dispatch) => {
    try {
        dispatch({
            type: REMOVE_PRODUCT_IN_CART,
            cart
        });
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
    }
};

export {
    addToCart,
    removeProductInCart
};
