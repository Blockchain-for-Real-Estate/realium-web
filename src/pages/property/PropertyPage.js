import useProperty from "src/context/queries/useProperty";
import PropertyBreadCrumbsSection from "./sections/PropertyBreadCrumbsSection";
import PropertyDetailsSection from "./sections/PropertyDetailsSection";
import OfferListSection from "./sections/PropertyOfferListSection";
import PropertyImageGallerySection from "./sections/PropertyImageGallerySection";
import PropertyHeadingSection from "./sections/PropertyHeadingSection";
import PropertyDescriptionSection from "./sections/PropertyDescriptionSection";

const PropertyPage = ({ propertyId }) => {
  const { data: property } = useProperty(propertyId);

  return (
    <div className="md:divide-y">
      <div className="md:flex md:justify-between items-end my-10 max-w-6xl mx-auto px-4">
        <PropertyHeadingSection property={property} />
        <PropertyBreadCrumbsSection property={property} />
      </div>
      <div className="md:flex max-w-6xl mx-auto gap-x-12 px-4 md:py-10 my-10">
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
        <div className="flex-1 max-w-sm">
          <div className="relative h-full">
            <OfferListSection className="sticky top-0" property={property} />
          </div>
        </div>
      </div>
      <PropertyDetailsSection property={property} />
    </div>
  );
};

export default PropertyPage;
