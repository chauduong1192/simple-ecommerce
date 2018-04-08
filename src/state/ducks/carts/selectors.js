const getCarts = state => state.carts;

const getQuantityById = state => id => {
  if(!state.carts.length) {
    return;
  }
  const cart = state.carts.filter(cart => cart.id === id);
  return cart[0].quantity;
}; 

const getTotal = state =>
  state.carts.reduce((total, cart) =>
  total + (+cart.quantity) * cart.newPrice , 0);
  
const getTotalQuantity = state =>
  state.carts.reduce((total, cart) =>
    total + +cart.quantity
  , 0);

export {
  getCarts,
  getTotal,
  getQuantityById,
  getTotalQuantity
};
