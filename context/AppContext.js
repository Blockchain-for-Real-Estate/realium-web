import React, { useReducer, createContext, useContext } from "react";

import RemoveToastAction from "./actions/layout/RemoveToastAction";
import AddToastAction from "./actions/layout/AddToastAction";
import AddToCartAction from "./actions/cart/AddToCartAction";
import RemoveFromCartAction from "./actions/cart/RemoveFromCartAction";
import UpdateCartItemAction from "./actions/cart/UpdateCartItemAction";
import GetDefaultCart from "./actions/cart/GetDefaultCart";

const AppContext = createContext();

const INITIAL_STATE = {
  modalOpen: false,
  modal: {},
  toasts: [],
  sideCartOpen: false,
  secondaryMenu: [],
  cart: GetDefaultCart(),
};

const AppReducer = (state, action) => {
  console.info(`APP CONTEXT: ${action.type}`);
  switch (action.type) {
    // LAYOUT
    case "SET_MODAL":
      return { ...state, modalOpen: true, modal: action.payload };
    case "CLOSE_MODAL":
      return { ...state, modalOpen: false };
    case "ADD_TOAST":
      return { ...state, ...AddToastAction(state.toasts, action.payload) };
    case "REMOVE_TOAST":
      return { ...state, ...RemoveToastAction(state.toasts, action.payload) };

    // SHOPPING CART
    case "TOGGLE_SIDECART":
      return { ...state, sideCartOpen: !state.sideCartOpen };
    case "ADD_TO_CART":
      return {
        ...state,
        sideCartOpen: true,
        ...AddToCartAction(state.cart, action.payload),
      };
    case "REMOVE_FROM_CART":
      return { ...state, ...RemoveFromCartAction(state.cart, action.payload) };
    case "UPDATE_CART_ITEM":
      return { ...state, ...UpdateCartItemAction(state.cart, action.payload) };
    case "SET_PROMO":
      return { ...state, promo: action.payload };

    default: {
      console.error(`APP CONTEXT: Unknown Action Type: ${action.type}`);
      return state;
    }
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, INITIAL_STATE);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
