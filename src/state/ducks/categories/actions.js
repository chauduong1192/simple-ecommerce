import { CategoryAPI } from '../../../services/api';

import {
    GET_CATEGORIES,
} from './types';

const getCategories =  () => (dispatch) => {
    try {
        const categories = CategoryAPI.getCategories();
        dispatch({
            type: GET_CATEGORIES,
            categories
        });
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
    }
};

export {
    getCategories
};