import { setItemWithExpiration } from "utilities/web/LocalStorage";
import { v4 as uuid } from "uuid";

/**
 * @param {String} eventId - id of the item to be added.
 * @returns
 */
const AddToCartAction = (cart, product) => {
  let _cart = [...cart];
  _cart.push({ cartId: uuid(), product });
  setItemWithExpiration("cart", JSON.stringify(_cart));
  return { cart: _cart };
};

export default AddToCartAction;
