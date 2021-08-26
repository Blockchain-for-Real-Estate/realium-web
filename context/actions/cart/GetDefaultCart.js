import { getItemWithExpiration } from "utilities/web/LocalStorage";

/**
 *
 * @returns an array of cart items from local storage if available
 */
const GetDefaultCart = () => {
  const cart = getItemWithExpiration("cart");
  if (cart) {
    return JSON.parse(cart);
  } else {
    return [];
  }
};

export default GetDefaultCart;
