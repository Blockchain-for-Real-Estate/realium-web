import { useRouter } from "next/router";
import useProperty from "src/context/queries/useProperty";
import PropertyBreadCrumbsSection from "./sections/PropertyBreadCrumbsSection";
import PropertyDetailsSection from "./sections/PropertyDetailsSection";
import BuyListOfferSection from "./sections/BuyListOfferSection";
import PropertyImageGallerySection from "./sections/PropertyImageGallerySection";
import PropertyHeadingSection from "./sections/PropertyHeadingSection";
import PropertyDescriptionSection from "./sections/PropertyDescriptionSection";

const PropertyPage = ({}) => {
  const {
    query: { propertyId },
  } = useRouter();

  const {
    data: property,
    isLoading: isLoadingProperty,
    isError: isErrorProperty,
    isIdle: isIdleProperty,
  } = useProperty(propertyId);

  return (
    <>
      <div className="flex justify-between items-end my-10 max-w-6xl mx-auto">
        <PropertyHeadingSection property={property} />
        <PropertyBreadCrumbsSection property={property} />
      </div>
      <div className="flex max-w-6xl mx-auto">
        <div className="flex-1">
          <PropertyImageGallerySection
            images={[
              "/images/hero-blue.jpg",
              "/images/hero-green.jpg",
              "/images/hero-red.jpg",
              "/images/hero-orange.jpg",
            ]}
          />
          <PropertyDescriptionSection property={property} />
        </div>
        <div className="flex-1">
          <BuyListOfferSection />
        </div>
      </div>
      <PropertyDetailsSection property={property} />
    </>
  );
};

export default PropertyPage;
