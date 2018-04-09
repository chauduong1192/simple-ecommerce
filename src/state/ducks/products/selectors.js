const getProducts = state => state.products;
const sortProducts = state => type =>
  type === 'low' ?
    state.products.sort((a, b) => a.newPrice - b.newPrice)
  : 
    state.products.sort((a, b) => b.newPrice - a.newPrice);
const filterProducts = state => type => {
  let array = [];

  type.map(name => {
    array = [...array, state.products.filter(product => product.brand.name === name)]
  })
  console.log(array)  
}

export {
  getProducts,
  sortProducts,
  filterProducts
};
