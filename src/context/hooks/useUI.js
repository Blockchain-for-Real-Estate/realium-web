import { useAppContext } from "src/context/AppContext";

const useUI = () => {
  const { dispatch, state } = useAppContext();

  const toast = (title, body, type = "success", duration = 5000) => {
    dispatch({
      type: "ADD_TOAST",
      payload: {
        title,
        body,
        type,
        duration,
      },
    });
  };

  const currency = state.currency;

  const toggleCurrency = () => {
    if (state.currency === "AVAX") {
      dispatch({
        type: "SET_CURRENCY",
        payload: "USD",
      });
    } else {
      dispatch({
        type: "SET_CURRENCY",
        payload: "AVAX",
      });
    }
  };

  return { toast, currency, toggleCurrency };
};

export default useUI;
