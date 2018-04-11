const getCarts = state => state.carts.lists;
const getIsModal = state => state.carts.isModal;
const getQuantityById = state => id => {
  if(!state.carts.lists.length) {
    return;
  }
  const cart = state.carts.lists.filter(cart => cart.id === id);
  return cart[0].quantity;
}; 

const getTotal = state =>
  state.carts.lists.reduce((total, cart) =>
  total + (+cart.quantity) * cart.newPrice , 0);
  
const getTotalQuantity = state =>
  state.carts.lists.reduce((total, cart) =>
    total + +cart.quantity
  , 0);

export {
  getCarts,
  getTotal,
  getQuantityById,
  getTotalQuantity,
  getIsModal
};
