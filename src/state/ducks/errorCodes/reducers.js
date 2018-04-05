import {
  GET_ERROR_CODES,
  GET_ERROR_CODE,
  CREATE_ERROR_CODE,
  UPDATE_ERROR_CODE,
  DELETE_ERROR_CODE,
  ERROR_CODE_ERROR
} from './types';

const initialState = {
    lists: {},
    errorCode: {},
    errors: {}
  };

const errorCodesReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ERROR_CODES:
        return {
          ...state,
          lists: [...state.lists, ...action.errorCodes],
          error: {}
        }
      case GET_ERROR_CODE:
        return action.errorCode ? {
          ...state,
          errorCode: Object.assign({}, action.errorCode),
          error: {}
        } : null;
      case CREATE_ERROR_CODE:
        if(!state.lists.length) {
          return initialState;
        }
        return {
          ...state,
          // eslint-disable-next-line radix
          lists: [...state.lists.filter(errorCode => parseInt(errorCode.error_code) !== parseInt(action.errorCode.error_code)),
            Object.assign({}, action.errorCode)],
          error: {}
        }
      case UPDATE_ERROR_CODE:
        if(!state.lists.length) {
          return initialState;
        }
        return {
          ...state,
          // eslint-disable-next-line radix
          lists: [...state.lists.filter(errorCode => parseInt(errorCode.error_code) !== parseInt(action.errorCode.error_code)),
            Object.assign({}, action.errorCode)],
          errorCode: Object.assign({}, action.errorCode),
          error: {}
        }
      case DELETE_ERROR_CODE:
      return {
          ...state,
          // eslint-disable-next-line radix
          lists: state.lists.filter(errorCode => parseInt(errorCode.error_code) !== parseInt(action.errorCode.error_code)),
          error: {}
        }
      case ERROR_CODE_ERROR:
        return {
          ...state,
          errors: Object.assign({}, action.error)
        }
      default:
        return state;
    }
  };
  
  export default errorCodesReducer;