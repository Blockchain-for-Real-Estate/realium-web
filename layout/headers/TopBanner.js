import { XCircleIcon } from "@heroicons/react/outline";
import { useState } from "react";

export default function TopBanner({ Icon, message }) {
  const { show, setShow } = useState(true);

  // if (!show) return null;
  return (
    <div className="rounded-md p-4 bg-blue-50 py-8">
      <div className="flex">
        <div className="flex-shrink-0">
          <Icon className="h-5 w-5" />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-blue-500">{message}</p>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button
              onClick={setShow}
              type="button"
              className="bg-blue-50 text-blue-800 hover:text-blue-400 inline-flex rounded-md p-1.5"
            >
              <span className="sr-only">Dismiss</span>
              <XCircleIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
