import {
    GET_PRODUCTS
} from './types';
import {ProductAPI} from '../../../services/api'

const getProducts = () => async (dispatch) => {
    const products = await ProductAPI.getProducts();
    try {
        dispatch({
            type: GET_PRODUCTS,
            products
        });
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
    }
};

export {
    getProducts,
};
