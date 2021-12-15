import CurrencyDisplay from "src/components/avax/CurrencyDisplay";
import usePropertyOffers from "src/context/queries/usePropertyOffers";
import PropertySellModal from "./PropertySellModal";
import useUser from 'src/context/queries/useUser'

const PropertyOffersTable = ({ property, action = false }) => {
  const { data: offers, isLoading } = usePropertyOffers(property?.propertyId);
  const { data: user } = useUser();

  return (
    <div className="p-1">
      <table className="max-w-4xl w-screen divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className={CLASSES.th}>Buyer Address</th>
            <th className={CLASSES.th}>Quantity</th>
            <th className={CLASSES.th}>Offer</th>
            {action && <th className={CLASSES.th}></th>}
          </tr>
        </thead>
        <tbody>
          {offers?.map((offer, idx) => (
              offer.buyerAddress!=user.attributes["custom:wallet"] ? 
              <tr
                className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                key={offer.offerId}
              >
              <td className={CLASSES.td}>{offer.buyerAddress}</td>
              <td className={CLASSES.td}>{offer.quantity}</td>
              <td className={CLASSES.td}>
                <CurrencyDisplay balance={offer.price} hideSymbol />
              </td>
              {action && (
                <td className={CLASSES.td}>
                  <PropertySellModal property={property} offer={offer} />
                </td>
              )}
              </tr>
            :           
            <tr
              className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
              key={offer.offerId}
            >
            <td className={CLASSES.tdd}>{offer.buyerAddress}</td>
            <td className={CLASSES.tdd}>{offer.quantity}</td>
            <td className={CLASSES.tdd}>
              <CurrencyDisplay balance={offer.price} hideSymbol />
            </td>
            <td className={CLASSES.tdd}>
            
            </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isLoading && <div className="text-center py-5">Getting Offers...</div>}
      {offers?.length < 1 && (
        <div className="text-center py-5">No Offers Available</div>
      )}
    </div>
  );
};

const CLASSES = {
  th: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-center",
  td: "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center",
  tdd: "px-6 py-4 whitespace-nowrap text-sm bg-gray-300 font-medium text-gray-900 text-center",
};

export default PropertyOffersTable;
