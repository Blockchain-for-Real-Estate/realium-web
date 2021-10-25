import React, { useReducer, createContext, useContext } from "react";

import RemoveToastAction from "./actions/RemoveToastAction";
import AddToastAction from "./actions/AddToastAction";

const AppContext = createContext();

const INITIAL_STATE = {
  modalOpen: false,
  modal: {},
  toasts: [],
};

const AppReducer = (state, action) => {
  process.env.NODE_ENV === "development" &&
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
