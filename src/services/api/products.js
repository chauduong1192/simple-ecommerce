import PRODUCTS from '../mockData/products';

const getProducts = async (queryParams) => {
  const categoryId = await queryParams.categoryId;
  try {
    const res = PRODUCTS.filter((product) => product.category.id === categoryId);

    return res;
  } catch (error) {
    throw error;
  }
};

export {
  getProducts,
};