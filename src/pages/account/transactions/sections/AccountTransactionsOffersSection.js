import Link from "next/link";
import CurrencyDisplay from "src/components/avax/CurrencyDisplay";
import Heading2 from "src/components/general/Heading2";
import useDeleteOfferMutation from "src/context/mutations/useDeleteOfferMutation";
import useProperty from "src/context/queries/useProperty";
import useUserOffers from "src/context/queries/useUserOffers";

const AccountTransactionsOffersSection = () => {
  const { data: userOffers, isLoading } = useUserOffers();

  return (
    <div className="bg-white p-4 rounded shadow">
      <Heading2
        title="Active Offers"
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
          {userOffers?.map((offer, idx) => (
            <OfferRow offer={offer} idx={idx} key={offer.offerId} />
          ))}
        </tbody>
      </table>
      {isLoading && <div className="text-center p-2">Getting Offers...</div>}
      {userOffers?.length < 1 && (
        <div className="text-center p-2">No Active Offers</div>
      )}
    </div>
  );
};

const OfferRow = ({ offer, idx }) => {
  const { data: property } = useProperty(offer.propertyId);
  const { mutate: deleteOffer, isLoading } = useDeleteOfferMutation(
    offer.propertyId,
    offer.offerId
  );

  return (
    <tr
      key={offer.offerId}
      className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
    >
      <td className={CLASSES.td}>{property?.propertyName}</td>
      <td className={CLASSES.td}>{offer.quantity}</td>
      <td className={CLASSES.td}>
        <CurrencyDisplay balance={offer.price} />
      </td>
      <td className={CLASSES.td}>
        <Link href={`/marketplace/${offer.propertyId}`} passHref>
          <button className="btn-secondary border p-2">View Property</button>
        </Link>{" "}
        <button
          onClick={deleteOffer}
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

export default AccountTransactionsOffersSection;
