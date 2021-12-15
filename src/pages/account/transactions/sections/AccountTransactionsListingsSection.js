import Link from "next/link";
import CurrencyDisplay from "src/components/avax/CurrencyDisplay";
import Heading2 from "src/components/general/Heading2";
import useDeleteListingMutation from "src/context/mutations/useDeleteListingMutation";
import useProperty from "src/context/queries/useProperty";
import useUserListings from "src/context/queries/useUserListings";

const AccountTransactionsListingsSection = () => {
  const { data: userListings, isLoading } = useUserListings();

  return (
    <div className="bg-white p-4 rounded shadow">
      <Heading2
        title="Active Listings"
        subtitle={
          "These are your current offers. Your AVAX is stored in the Realium Smart Contract until offer is accepted or closed"
        }
      />
      <table className="w-full divide-y divide-gray-200 mt-4">
        <thead className="bg-gray-100">
          <tr>
            <th className={CLASSES.th}>Property Name</th>
            <th className={CLASSES.th}>Quantity</th>
            <th className={CLASSES.th}>Price</th>
            <td className={CLASSES.th}></td>
          </tr>
        </thead>
        <tbody>
          {userListings?.map((listing, idx) => (
            <ListingRow listing={listing} idx={idx} key={listing.listingId} />
          ))}
        </tbody>
      </table>
      {isLoading && <div className="text-center p-2">Getting Listings...</div>}
      {userListings?.length < 1 && (
        <div className="text-center p-2">No Active listings</div>
      )}
    </div>
  );
};

const ListingRow = ({ listing, idx }) => {
  const { data: property } = useProperty(listing.propertyId);
  const { mutate: deleteListing, isLoading } = useDeleteListingMutation(
    listing.propertyId,
    listing.listingId
  );

  return (
    <tr
      key={listing.listingId}
      className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
    >
      <td className={CLASSES.td}>{property?.propertyName}</td>
      <td className={CLASSES.td}>{listing.quantity}</td>
      <td className={CLASSES.td}>
        <CurrencyDisplay balance={listing.price} />
      </td>
      <td className={CLASSES.td}>
        <Link href={`/marketplace/${listing.propertyId}`} passHref>
          <button className="btn-secondary border p-2">View Property</button>
        </Link>{" "}
        <button
          onClick={deleteListing}
          disabled={isLoading}
          className="border border-red-500 p-2 text-red-500 rounded hover:bg-red-300"
        >
          {isLoading ? "..." : "Remove"}
        </button>
      </td>
    </tr>
  );
};

const CLASSES = {
  th: "px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider",
  td: "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900",
};

export default AccountTransactionsListingsSection;
