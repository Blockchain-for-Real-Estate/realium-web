import Link from "next/link";
import moment from "moment";
import useUserPropertyOffers from "src/context/queries/useUserPropertyOffers";

const PropertyUserOffersSection = ({ property }) => {
  const { data: userOffers } = useUserPropertyOffers(property?.propertyId);

  if (userOffers?.length < 1) return null;
  return (
    <div>
      <div>Your Current Listings</div>
      {userOffers?.map((listing) => (
        <div key={listing.listingId} className="flex gap-4">
          <div>Quantity: {listing.quantity}</div>
          <div>Price: {listing.price}</div>
          <div>{moment(listing.createdAt).format("MM/DD/YYYY hh:mm:ss")}</div>
          <div>
            <Link href={`/account/transactions`}>Edit</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyUserOffersSection;
