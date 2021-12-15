import CurrencyDisplay from "src/components/avax/CurrencyDisplay";
import usePropertyListings from "src/context/queries/usePropertyListings";
import PropertyBuyModal from "./PropertyBuyModal";
import useDeleteListingMutation from "src/context/mutations/useDeleteListingMutation";
import useUser from 'src/context/queries/useUser';

const PropertyListingsTable = ({ property, action = false }) => {
  const { data: listings, isLoading } = usePropertyListings(
    property?.propertyId
  );

  const { data } = useUser();

  return (
    <div className="p-1">
      <table className="max-w-4xl w-screen divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className={CLASSES.th}>Seller Address</th>
            <th className={CLASSES.th}>Quantity</th>
            <th className={CLASSES.th}>Price</th>
            {action && <th className={CLASSES.th}></th>}
          </tr>
        </thead>
        <tbody>
          {listings?.map((listing, idx) => (
            <div>
              {listing.sellerAddress!=data.attributes["custom:wallet"] ? 
              <tr
                className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                key={listing.listingId}
              >
                  <td className={CLASSES.td}>{listing.sellerAddress}</td>
                  <td className={CLASSES.td}>{listing.quantity}</td>
                  <td className={CLASSES.td}>
                    <CurrencyDisplay balance={listing.price} hideSymbol />
                  </td>
                  {action && (
                    <td className={CLASSES.td}>
                      <PropertyBuyModal listing={listing} property={property} />
                    </td>

                  )}
                
              </tr>
            : null
            }
            </div>
          ))}
        </tbody>
      </table>
      {listings?.length < 1 && (
        <div className="text-center py-5">No Listings Available</div>
      )}
    </div>
  );
};

const CLASSES = {
  th: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-center",
  td: "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center",
};

export default PropertyListingsTable;
