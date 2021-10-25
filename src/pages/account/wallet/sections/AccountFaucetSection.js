import { ExternalLinkIcon } from "@heroicons/react/outline";
import Heading2 from "components/general/Heading2";

const AccountFaucetSection = () => {
  return (
    <div className="border-b border-gray-200 bg-white rounded-lg shadow p-5">
      <Heading2
        title="Get Test Funds"
        subtitle="While realium is in development you can request test funds from the fuji faucet"
      />
      <div>
        <a
          href="https://faucet.avax-test.network/"
          target="__blank"
          rel="noreferrer"
          className="inline"
        >
          <button className="btn-primary px-4 py-2 mt-4 flex items-center">
            <span>Go To Avalanche Faucet</span>{" "}
            <ExternalLinkIcon className="h-5 w-5 ml-2" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default AccountFaucetSection;