import PropertyBreadCrumbsSection from "./PropertyBreadCrumbsSection";

const PropertyHeadingSection = ({ property }) => {
  debugger;
  return (
    <div>
      <div className="mb-2">
        <h1 className="text-4xl font-extrabold text-gray-900">
          {property?.propertyName}
        </h1>
      </div>
      <div className="mb-2 text-base sm:text-xl">
        <div className="font-bold">
          {property?.propertyType || "Residential"} property in{" "}
          {property?.city || "Santa Barbara"}, {property?.state || "CA"}
        </div>
      </div>

      <div className="sm:flex sm:justify-between">
        <div className="text-xs sm:text-base">
          {property?.streetAddress || "588 South Beachfront Lane"} |{" "}
          {property?.city || "Santa Barbara"}, {property?.state || "CA"} |{" "}
          {property?.zipCode || "90110"}
        </div>
      </div>
    </div>
  );
};

export default PropertyHeadingSection;
