import CurrencyDisplay from "src/components/avax/CurrencyDisplay";
import usePropertyOffers from "src/context/queries/usePropertyOffers";
import useUserAvaxBalance from "src/context/queries/useUserAvaxBalance";
import PropertyListModal from "./PropertyListModal";
import PropertyOffersModal from "./PropertyOffersModal";

const PropertySellOrList = ({ property }) => {
  const { data: balance } = useUserAvaxBalance();
  const { data: offers } = usePropertyOffers(property?.propertyId);

  return (
    <div className="border-t-2 border-gray-100 rounded-b-lg pt-8 pb-1 px-6 bg-white shadow-md sm:px-10 sm:py-10">
      <div className="m-2">
        <h4 className="font-semibold text-lg">List your token</h4>
        <p className="text-sm mt-4 mb-12">
          List your token on the Realium marketplace. The listing will show up
          when someone selects to purchase a token share. Once your token(s) are
          listed, they are locked at their current price.
        </p>
      </div>
      <div className="mt-16 mb-4 mx-4 flex">
        <div className="flex-1 text-left">Highest Offer</div>
        <div className="flex items-center text-indigo-500 text-right">
          <CurrencyDisplay balance={offers?.[0]?.price} showName={false} />
          /share
        </div>
      </div>
      <div>
        <PropertyOffersModal property={property} />
        <p className="text-center py-2">or</p>
        <PropertyListModal property={property} />
      </div>
      <div className="mb-4 sm:mb-0 mt-12 mx-4 flex">
        <p className="flex-1 text-left text-gray-400 text-xs">
          Current Balance
        </p>
        <p className="flex-1 text-right text-indigo-500 text-xs">
          <CurrencyDisplay balance={balance} showSymbol={false} />
        </p>
      </div>
    </div>
  );
};

export default PropertySellOrList;
