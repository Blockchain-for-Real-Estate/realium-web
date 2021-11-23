import CurrencyDisplay from "src/components/avax/CurrencyDisplay";
import usePropertyListings from "src/context/queries/usePropertyListings";

const PropertyListingsTable = ({ propertyId, action = false }) => {
  const { data: listings } = usePropertyListings(propertyId);

  return (
    <div className="p-1">
      <table className="min-w-full divide-y divide-gray-200">
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
                  <button className="btn-primary p-2">Buy Now</button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const CLASSES = {
  th: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-center",
  td: "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center",
};

export default PropertyListingsTable;
