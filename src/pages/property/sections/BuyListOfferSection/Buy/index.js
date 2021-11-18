import AvaxSymbol from "src/components/avax/AvaxSymbol";
import CurrencyDisplay from "src/components/avax/CurrencyDisplay";
import useUserAvaxBalance from "src/context/queries/useUserAvaxBalance";
import ListingsModal from "./ListingsModal";

const Buy = ({ property }) => {
  const { data: balance } = useUserAvaxBalance();

  return (
    <>
      <div className="border-t-2 border-gray-100 rounded-b-lg pt-8 pb-1 px-6 bg-white sm:px-10 sm:py-10">
        <div className="m-2">
          <h4 className="font-semibold text-lg">Buying shares</h4>
          <p className="text-sm mt-4 mb-12">
            Interested in the property? Purchase some of the shares of the
            property to become a part owner. Select your shares from the list of
            sellers and become an owner of real estate in minutes.
          </p>
        </div>
        <div className="mt-16 mb-4 mx-4 flex">
          <div className="flex-1 text-left">Average Price</div>
          <div className="flex items-center text-indigo-500 text-right">
            <CurrencyDisplay balance={5} showName={false} />
            /share
          </div>
        </div>
        <div className="mt-4 mb-12 mx-4 flex">
          <div className="flex-1 text-left">Average Hold</div>
          <div className="flex-1 text-right text-indigo-500">12 days</div>
        </div>
        <ListingsModal property={property} />
        <div className="mb-4 sm:mb-0 mt-12 mx-4 flex">
          <p className="flex-1 text-left text-gray-400 text-xs">
            Current Balance
          </p>
          <p className="flex-1 text-right text-indigo-500 text-xs">
            <CurrencyDisplay balance={balance} showSymbol={false} />
          </p>
        </div>
      </div>
    </>
  );
};

export default Buy;
