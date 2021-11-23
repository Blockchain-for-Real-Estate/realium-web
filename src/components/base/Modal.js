import React from "react";
import { Transition, Dialog } from "@headlessui/react";
import classNames from "src/utilities/web/ClassNames";

const Modal = ({
  open,
  close,
  children,
  position = "justify-center items-center",
}) => {
  return (
    <Transition
      show={open || false}
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
    >
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={close}
      >
        <div className={classNames("flex p-5  min-h-screen", position)}>
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          <div className="relative bg-white rounded mx-auto">{children}</div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
