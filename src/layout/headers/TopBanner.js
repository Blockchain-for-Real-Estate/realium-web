/* This example requires Tailwind CSS v2.0+ */
import { SpeakerphoneIcon, XIcon } from "@heroicons/react/outline";

export default function Example() {
  return (
    <div className="bg-indigo-600 flex items-center justify-center relative">
      <span className="text-sm lg:text-base text-center text-white p-2">
        We are currently in beta so properties are not real.
      </span>
      <XIcon
        className="absolute right-5 h-6 w-6 text-white"
        aria-hidden="true"
      />
    </div>
  );
}
