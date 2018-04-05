const getErrors = state => state.errorCodes.errors;
const getErrorCodes = state => state.errorCodes.lists;
const getErrorCodeById = state => id => {
  const lists = state.errorCodes.lists;
  if(lists.length){
    // eslint-disable-next-line
    return lists.find((errorCode) => errorCode.error_code === parseInt(id));
  }
  return state.errorCodes.errorCode;
};

export {
  getErrorCodes,
  getErrorCodeById,
  getErrors
};