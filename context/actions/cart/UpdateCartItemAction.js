const UpdateCartItemAction = (cart, { itemId, changes }) => {
  let index = cart.findIndex((item) => item.itemId === itemId);

  if (index !== undefined) {
    const _cart = [...cart];
    _cart[index] = { ..._cart[index], ...changes };
    return { cart: _cart };
  }
};

export default UpdateCartItemAction;
