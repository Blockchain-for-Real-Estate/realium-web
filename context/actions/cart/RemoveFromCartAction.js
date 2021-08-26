import { setItemWithExpiration } from "utilities/web/LocalStorage";

const RemoveFromCartAction = (cart, cartId) => {
  let _cart = cart.filter((cartItem) => cartItem.cartId !== cartId);
  setItemWithExpiration("cart", JSON.stringify(_cart));
  return { cart: _cart };
};

export default RemoveFromCartAction;
