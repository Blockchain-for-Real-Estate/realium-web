import React, { useEffect, Fragment, useState, useRef } from "react";
import { Transition } from "@headlessui/react";
import { useAppContext } from "src/context/AppContext";
import {
  XIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  XCircleIcon,
} from "@heroicons/react/outline";

const Toasts = () => {
  const { state, dispatch } = useAppContext();

  return (
    <div
      aria-live="assertive"
      className="fixed inset-0 flex items-start px-4 py-6 pointer-events-none sm:p-6 z-50"
    >
      <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
        {state.toasts.map((toast) => {
          return (
            <Toast
              key={toast.id}
              toast={toast}
              close={() =>
                dispatch({ type: "REMOVE_TOAST", payload: toast.id })
              }
            />
          );
        })}
      </div>
    </div>
  );
};

const Toast = ({ toast, close }) => {
  const { title, body, type, duration = 10000 } = toast;
  const [width, setWidth] = useState(false);
  const [open, setOpen] = useState(true);

  const timer = useRef();
  const timer2 = useRef();

  useEffect(() => {
    if (!width) {
      setTimeout(() => {
        setWidth(true);
      }, [100]);

      timer.current = setTimeout(() => {
        setOpen(false);
      }, duration);
    }

    if (!open && width) {
      timer2.current = setTimeout(() => {
        close();
      }, 700);
    }
  }, [duration, close, width, open]);

  const handleClose = () => {
    clearTimeout(timer.current);
    setOpen(false);
  };

  const getIcon = (type) => {
    switch (type) {
      case "success": {
        return (
          <CheckCircleIcon
            className="h-6 w-6 text-green-400"
            aria-hidden="true"
          />
        );
      }
      case "error": {
        return (
          <XCircleIcon className="h-6 w-6 text-red-400" aria-hidden="true" />
        );
      }
      case "warn": {
        return (
          <ExclamationCircleIcon
            className="h-6 w-6 text-yellow-400"
            aria-hidden="true"
          />
        );
      }
      default:
        return (
          <ExclamationCircleIcon
            className="h-6 w-6 text-gray-400"
            aria-hidden="true"
          />
        );
    }
  };

  const getColor = (type, full) => {
    let width = full ? "h-2 w-full" : "h-2 w-0";

    switch (type) {
      case "success": {
        return "bg-green-400 " + width;
      }
      case "error": {
        return "bg-red-400 " + width;
      }
      case "warn": {
        return "bg-yellow-400 " + width;
      }
      default:
        return "bg-black " + width;
    }
  };

  return (
    <Transition
      appear={true}
      show={open}
      as={Fragment}
      enter="transform ease-out duration-500 transition"
      enterFrom="-translate-y-full md:translate-y-0 md:translate-x-full"
      enterTo="translate-y-0 md:translate-x-0"
      leave="transform ease-in duration-300 transition"
      leaveFrom="translate-x-0"
      leaveTo="translate-x-full"
    >
      <div className="relative max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
        <div className="absolute top-0 w-full bg-gray-200">
          {width ? (
            <div
              className={getColor(type, false)}
              style={{
                transition: `width ${duration / 1000}s linear`,
              }}
            />
          ) : (
            <div
              className={getColor(type, true)}
              style={{
                transition: `width ${duration / 1000}s linear`,
              }}
            />
          )}
        </div>
        <div className="p-4 pt-6">
          <div className="flex items-start">
            <div className="flex-shrink-0">{getIcon(type)}</div>
            <div className="ml-3 w-0 flex-1 pt-0.5">
              <p className="text-sm font-medium text-gray-900">{title}</p>
              <p className="mt-1 text-sm text-gray-500">{body}</p>
            </div>
            <div className="ml-4 flex-shrink-0 flex">
              <button
                className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={handleClose}
              >
                <span className="sr-only">Close</span>
                <XIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default Toasts;
