import { ErrorCodeAPI } from '../../../services/api';

import {
    GET_ERROR_CODES,
    GET_ERROR_CODE,
    CREATE_ERROR_CODE,
    UPDATE_ERROR_CODE,
    DELETE_ERROR_CODE,
    ERROR_CODE_ERROR
} from './types';

const getErrorCodes =  ({ query = null, sort = 'new' , limit = 25, page = 1 }) => async (dispatch) => {
    try {
        const errorCodes = await ErrorCodeAPI.getErrorCodes({
            query,
            sort,
            limit,
            page
        });
        dispatch({
            type: GET_ERROR_CODES,
            errorCodes: errorCodes.result
        });
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
    }
};

const getErrorCode = id => async (dispatch) => {
    try {
        const errorCode = await ErrorCodeAPI.getErrorCode(id);
        dispatch({
            type: GET_ERROR_CODE,
            errorCode: errorCode.result
        });
        
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
    }
};

const createErrorCode = body => async (dispatch) => {
    try {
        const errorCode = await ErrorCodeAPI.createErrorCode('', body);
        if(!errorCode.code) {
            dispatch({
                type: ERROR_CODE_ERROR,
                error: errorCode.result
            });
            return;
        }
        dispatch({
            type: CREATE_ERROR_CODE,
            errorCode: errorCode.result
        });
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
    }
};

const updateErrorCode = body => async (dispatch) => {
    try {
        const errorCode = await ErrorCodeAPI.updateErrorCode('', body.error_code, body);
        if(!errorCode.code) {
            dispatch({
                type: ERROR_CODE_ERROR,
                error: errorCode.result
            });
            return;
        }
        dispatch({
            type: UPDATE_ERROR_CODE,
            errorCode: errorCode.result
        });
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
    }
};

const deleteErrorCode = id => async (dispatch) => {
    try {
        const errorCode = await ErrorCodeAPI.deleteErrorCode('', id);
        dispatch({
            type: DELETE_ERROR_CODE,
            errorCode: errorCode.result
        });
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
    }
};

export {
    getErrorCodes,
    getErrorCode,
    createErrorCode,
    updateErrorCode,
    deleteErrorCode
};