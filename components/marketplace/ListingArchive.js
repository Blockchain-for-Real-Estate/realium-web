import useListingsQuery from "data/queries/useListingQuery";

export default function ListingArchive(rows) {
  const { data: listings, isLoading, isError } = useListingsQuery();

  if (isLoading) return <div>Loading Wave</div>;
  if (isError) return <div>Error Screen</div>;

  console.log(listings);

  return (
    <div className="max-w-7xl mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
      {/* {Object.keys(listings).map((key) => (
          <div key={key} className="l-grid__item">
            <Listing
              listing={listings[key]}
              index={listings[key].propertyId - 1}
              setNotify={setNotify}
            />
          </div>
        ))} */}
    </div>
  );
}
