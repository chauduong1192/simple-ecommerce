import {
    ADD_TO_CART,
    CHECKOUT,
    CHANGE_QUANTITY,
    REMOVE_PRODUCT_IN_CART,
    OPEN_CART
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

const checkout = () => (dispatch) => {
    try {
        dispatch({
            type: CHECKOUT,
            cart: true
        });
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
    }
};

const changeQuantity = cart => (dispatch) => {
    try {
        dispatch({
            type: CHANGE_QUANTITY,
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

const openCart = bool => (dispatch) => {
    try {
        dispatch({
            type: OPEN_CART,
            isModal: bool
        });
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
    }
};

export {
    addToCart,
    checkout,
    changeQuantity,
    removeProductInCart,
    openCart
};
