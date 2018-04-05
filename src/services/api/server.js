import qs from 'qs';

import { $get, $post, $put, $delete } from './base';

const PATH = 'MccMcu';

const getServers = async (queryParams) => {
  const search = queryParams && typeof queryParams === 'object' ? qs.stringify(queryParams, { addQueryPrefix: true }) : '';

  try {
    const res = await $get(`${PATH}${search}`);

    return res;
  } catch (error) {
    throw error;
  }
};

const getServer = async (id) => {
  try {
    const res = await $get(`${PATH}/${id}`);

    return res;
  } catch (error) {
    throw error;
  }
};

const createServer = async (action, body) => {
  try {
    const res = await $post(`${PATH}/${action}`, body);

    return res;
  } catch (error) {
    throw error;
  }
};
const updateServer = async (action, id, body) => {
  try {
    const res = await $put(`${PATH}/${id}/${action}`, body);

    return res;
  } catch (error) {
    throw error;
  }
};

const deleteServer = async (action, id) => {
  try {
    const res = await $delete(`${PATH}/${id}/${action}`);

    return res;
  } catch (error) {
    throw error;
  }
};


export {
  getServers,
  getServer,
  createServer,
  deleteServer,
  updateServer
};