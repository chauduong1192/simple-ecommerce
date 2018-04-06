import qs from 'qs';
import { categories } from '../mockData/categories';
import { $get, $post, $put, $delete } from './base';

const PATH = 'categories';

const getCategories = (queryParams) => {
  try {
    const res = categories;

    return res;
  } catch (error) {
    throw error;
  }
};

export {
  getCategories,
};