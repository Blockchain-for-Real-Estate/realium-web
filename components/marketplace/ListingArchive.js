import useListingsQuery from "data/queries/useListingQuery";
import ListingCard from "./ListingCard";

export default function ListingArchive(rows) {
  const { data: listings, isLoading, isError } = useListingsQuery();

  if (isLoading) return <div>Loading Wave</div>;
  if (isError) return <div>Error Screen</div>;
  console.log(listings);
  return (
    <div className="max-w-7xl mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
      {listings.map((listing) => (
        <div key={listing.propertyId} className="l-grid__item">
          <ListingCard listing={listing} />
        </div>
      ))}
    </div>
  );
}
