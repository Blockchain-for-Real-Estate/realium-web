import { useEffect, useState } from "react";
import { ClipboardCopyIcon, CreditCardIcon } from "@heroicons/react/outline";
import Heading2 from "components/general/Heading2";
import useUser from "context/queries/useUser";

const AccountWalletIdSection = () => {
  const { data: user } = useUser();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(user.walletAddress);
    setCopied(true);
  };

  useEffect(() => {
    if (copied) {
      setTimeout(() => setCopied(false), 5000);
    }
  }, [copied]);

  return (
    <div className="border-b border-gray-200 bg-white rounded-lg shadow p-5">
      <Heading2
        title="Your Wallet Address"
        subtitle="This address can be shared to reciev funds from"
      />

      <div className="mt-1 flex rounded-md shadow-sm mt-4">
        <div className="relative flex items-stretch flex-grow focus-within:z-10">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <CreditCardIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </div>
          <input
            type="wallet"
            name="wallet"
            id="wallet"
            value={user?.walletAddress}
            disabled={true}
            className="block w-full rounded-none rounded-l-md pl-10 sm:text-sm border border-gray-300 bg-white"
          />
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
        >
          <ClipboardCopyIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </button>
      </div>
      {copied && (
        <div className="text-sm text-green-500 text-right">
          Copied to clipboard
        </div>
      )}
    </div>
  );
};

export default AccountWalletIdSection;
