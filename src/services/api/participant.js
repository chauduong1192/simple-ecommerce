import qs from 'qs';

import { $get } from './base';

const PATH = 'mccParticipant';

const getParticipants = async (queryParams) => {
  const search = queryParams && typeof queryParams === 'object' ? qs.stringify(queryParams, { addQueryPrefix: true }) : '';

  try {
    const res = await $get(`${PATH}${search}`);

    return res;
  } catch (error) {
    throw error;
  }
};

export {
  getParticipants
};