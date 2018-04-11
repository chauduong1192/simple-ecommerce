import PRODUCTS from '../mockData/products';

const getProducts = async (queryParams) => {
  try {
    const res = await PRODUCTS;

    return res;
  } catch (error) {
    throw error;
  }
};

export {
  getProducts,
};
