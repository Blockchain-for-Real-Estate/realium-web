import React, { useEffect } from "react";
import { Transition } from "@headlessui/react";
import { useLayoutContext, closeToast } from "context/layout/LayoutContext";

const Toast = () => {
  const { layoutState, layoutDispatch } = useLayoutContext();
  const { text, color, duration, open } = layoutState.toast;

  useEffect(() => {
    setTimeout(() => {
      if (open) {
        layoutDispatch(closeToast());
      }
    }, duration);
  }, [open, duration, layoutDispatch]);

  const bgColor =
    color === "green"
      ? "bg-green-50 text-green-800"
      : color === "red"
      ? "bg-red-50 text-red-800"
      : "bg-yellow-50 text-yello-800";

  return (
    <Transition show={open}>
      <div className="fixed w-full h-32 top-1 z-50">
        <Transition.Child
          enter="transform transition ease-in-out duration-500 sm:duration-700"
          enterFrom="-translate-y-full opacity-0"
          enterTo="translate-y-0 opacity-100"
          className="flex items-center text-center"
        >
          <div className={"px-4 py-8 rounded-md mx-auto shadow " + bgColor}>
            {text}
          </div>
        </Transition.Child>
      </div>
    </Transition>
  );
};

export default Toast;
