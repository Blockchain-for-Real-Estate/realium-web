import { v4 as uuid } from "uuid";

const AddToastAction = (toasts, toast) => {
  let _toasts = [...toasts];

  _toasts.push({
    ...toast,
    id: uuid(),
  });

  return { toasts: _toasts };
};

export default AddToastAction;
