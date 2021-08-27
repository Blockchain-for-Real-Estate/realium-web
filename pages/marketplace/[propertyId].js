import { useRouter } from "next/router";
import ImageGallery from "components/single/ImageGallery";
import useListingQuery from "data/queries/useListingQuery";
// import Avax from "assets/svg/temp/Avax";
import { Breadcrumbs } from "components/single/BreadCrumbs";
import Avax from "assets/svg/temp/avax";
import NumberFormat from "react-number-format";
import useTokenQuery from "data/queries/useTokenQuery";
import { DetailsTable } from "components/single/DetailsTable";
// import { BuyListOffer } from "components/single/BuyListOffer";

export default function SingleProduct() {
  const {
    query: { propertyId },
  } = useRouter();

  const {
    data: listing,
    isLoading: isLoadingListing,
    isError: isErrorListing,
    isIdle: isIdleListing,
  } = useListingQuery(propertyId);

  const {
    data: tokens,
    isLoading: isLoadingTokens,
    isError: isErrorTokens,
    isIdle: isIdleTokens,
  } = useTokenQuery(propertyId);

  let isLoading = isLoadingListing || isLoadingTokens;
  let isError = isErrorListing || isErrorTokens;
  let isIdle = isIdleListing || isIdleTokens;

  if (isIdle || isLoading) return <div>Loading</div>;
  if (isError) return <div>Could not get listing</div>;

  debugger;
  const token = tokens?.[0];

  return (
    <div className="max-w-7xl mx-auto">
      {/* HEADING */}
      <div className="border-bottom border-gray-200 mb-4 m-4">
        <div className="mb-2">
          <h1 className="text-4xl font-extrabold text-gray-900">
            {listing.propertyName}
          </h1>
        </div>
        <div className="mb-2 text-base sm:text-xl">
          <div className="font-weight-bold">
            {listing.propertyType} in {listing.city}, {listing.state}
          </div>
        </div>

        <div className="flex justify-between mb-4">
          <div className="text-xs sm:text-base">
            {listing.streetAddress} | {listing.city}, {listing.state} |{" "}
            {listing.zipCode}
          </div>
          <div>
            <Breadcrumbs listing={listing} />
          </div>
        </div>
      </div>

      <div className="flex my-10">
        <div className="max-w-2xl">
          <ImageGallery
            images={["/images/hero-blue.jpg", "/images/hero-green.jpg"]}
          />

          <div className="font-bold pt-4" style={{ fontSize: "1.1rem" }}>
            Description
          </div>

          <div className="mb-8">
            {listing.propertyName} is located in {listing.city}, {listing.state}{" "}
            for a steal at{" "}
            {
              <NumberFormat
                value={token.purchasedPrice}
                displayType={"text"}
                thousandSeparator={true}
              />
            }
            <div className="h-4 inline-flex px-1">
              <Avax />
            </div>
            . {listing.details.description}
          </div>
        </div>
        <div className="w-1/3">{/* <BuyListOffer /> */}</div>
      </div>

      <DetailsTable listing={listing} token={token} event={transactions} />
      <Transactions listing={listing} setNotify={props.setNotify} />
    </div>
  );
}
