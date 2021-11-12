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

  const modal = (
    title,
    content,
    bgColor = "bg-indigo-100",
    textColor = "text-indigo-600",
    onConfirm,
    confirmBtn = "Confirm",
    onCancel,
    cancelBtn = "Cancel"
  ) => {
    dispatch({
      type: "SET_MODAL",
      payload: {
        title,
        content,
        bgColor,
        textColor,
        onConfirm,
        confirmBtn,
        onCancel,
        cancelBtn,
      },
    });
  };

  return { toast, modal };
};

export default useUI;
