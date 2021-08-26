const RemoveToastAction = (toasts, id) => {
  let _toasts = toasts.filter((toast) => toast.id !== id);
  return { toasts: _toasts };
};

export default RemoveToastAction;
