/* This example requires Tailwind CSS v2.0+ */
import { SpeakerphoneIcon, XIcon } from "@heroicons/react/outline";

export default function TopBanner(props) {
  return (
    <div className="bg-indigo-600 flex items-center justify-center relative">
      <span className="text-sm lg:text-base text-center text-white p-2">
        {props.message ||
          "We are currently in beta so properties are not real."}
      </span>
    </div>
  );
}
