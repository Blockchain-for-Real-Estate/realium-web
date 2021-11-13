import { useRouter } from "next/router";
import ImageGallery from "components/sections/single/ImageGallery";
import usePropertyQuery from "data/queries/usePropertyQuery";
import { Breadcrumbs } from "components/sections/single/BreadCrumbs";
//import Avax from "assets/svg/temp/avax";
import NumberFormat from "react-number-format";
import useTokenQuery from "data/queries/useTokenQuery";
import { DetailsTable } from "components/sections/single/DetailsTable";
import { BuyListOffer } from "components/sections/single/BuyListOffer";

export default function PropertyDetails() {
  const {
    query: { propertyId },
  } = useRouter();

  const {
    data: Property,
    isLoading: isLoadingProperty,
    isError: isErrorProperty,
    isIdle: isIdleProperty,
  } = usePropertyQuery(propertyId);

  const {
    data: tokens,
    isLoading: isLoadingTokens,
    isError: isErrorTokens,
    isIdle: isIdleTokens,
  } = useTokenQuery(propertyId);

  let isLoading = isLoadingProperty //|| isLoadingTokens;
  let isError = isErrorProperty //|| isErrorTokens;
  let isIdle = isIdleProperty //|| isIdleTokens;

  if (isIdle || isLoading) return <div>Loading</div>;
  if (isError) return <div>Could not get Property</div>;

  const token = tokens?.[0];

  return (
    <>
      <div className="max-w-6xl mx-auto sm:divide-y">
        {/* HEADING */}
        <div className="my-10 sm:mb-4 mx-4">
          <div className="mb-2">
            <h1 className="text-4xl font-extrabold text-gray-900">
              {Property.propertyName}
            </h1>
          </div>
          <div className="mb-2 text-base sm:text-xl">
            <div className="font-bold">
              {Property.propertyType || "Residential"} property in {Property.city || "Santa Barbara"}, {Property.state || "CA"}
            </div>
          </div>

          <div className="sm:flex sm:justify-between mb-2 sm:mb-4">
            <div className="text-xs sm:text-base">
              {Property.streetAddress || "588 South Beachfront Lane"} | {Property.city  || "Santa Barbara"}, {Property.state  || "CA"} |{" "}
              {Property.zipCode || "90110"}
            </div>
              <Breadcrumbs Property={Property} />
          </div>
        </div>

        {/* MAIN SECTION */}
        <div className="sm:flex sm:justify-between sm:py-10 my-10">
          {/* IMAGE AND DESCRIPTION */}
          <div className="mx-0 sm:mx-4 max-w-2xl">
            <ImageGallery
              images={["/images/hero-blue.jpg", "/images/hero-green.jpg", "/images/hero-red.jpg", "/images/hero-orange.jpg"]}
            />
            <div className="mx-6 sm:mx-0">
              <div className="font-bold pt-8" style={{ fontSize: "1.1rem" }}>
                Description
              </div>

              <div className="mb-12">
                {Property.propertyName} is located in {Property.city || "Santa Barbara"}, {Property.state || "CA"}. {Property.propertyDescription}
              </div>
            </div>
          </div>
          {/* BUY LIST OFFER*/}
          <div className="mx-4 sm:mx-0 sm:max-w-sm">
            <BuyListOffer />
          </div>
        </div>
      </div>
      
      {/* DETAILS TABLE */}
      <DetailsTable Property={Property} token={token} />
      {/* <Transactions Property={Property} /> */}
    </>
  );
}
