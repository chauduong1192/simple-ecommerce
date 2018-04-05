import qs from 'qs';

import { $get, $post, $put, $delete } from './base';

const PATH = 'errorCode';

const getErrorCodes = async (queryParams) => {
  const search = queryParams && typeof queryParams === 'object' ? qs.stringify(queryParams, { addQueryPrefix: true }) : '';

  try {
    const res = await $get(`${PATH}${search}`);

    return res;
  } catch (error) {
    throw error;
  }
};

const getErrorCode = async (id) => {
  try {
    const res = await $get(`${PATH}/${id}`);

    return res;
  } catch (error) {
    throw error;
  }
};

const createErrorCode = async (action, body) => {
  try {
    const res = await $post(`${PATH}/${action}`, body);

    return res;
  } catch (error) {
    throw error;
  }
};
const updateErrorCode = async (action, id, body) => {
  console.log(body);
  try {
    const res = await $put(`${PATH}/${id}/${action}`, body);

    return res;
  } catch (error) {
    throw error;
  }
};

const deleteErrorCode = async (action, id) => {
  try {
    const res = await $delete(`${PATH}/${id}/${action}`);

    return res;
  } catch (error) {
    throw error;
  }
};


export {
  getErrorCodes,
  getErrorCode,
  createErrorCode,
  deleteErrorCode,
  updateErrorCode
};