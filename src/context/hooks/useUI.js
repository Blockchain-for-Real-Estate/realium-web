import { useAppContext } from "context/AppContext";

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

  return { toast };
};

export default useUI;
