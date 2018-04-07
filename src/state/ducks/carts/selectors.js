const getCarts = state => state.carts;
const getTotal = state => state.carts.reduce((total, cart) => total + (+cart.quantity) * cart.newPrice , 0);

export {
  getCarts,
  getTotal
};