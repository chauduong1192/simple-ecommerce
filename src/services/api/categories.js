import { categories } from '../mockData/categories';

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