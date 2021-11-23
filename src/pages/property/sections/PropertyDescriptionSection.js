const PropertyDescriptionSection = ({ property }) => {
  return (
    <div className="mx-6 sm:mx-0">
      <div className="font-bold pt-8" style={{ fontSize: "1.1rem" }}>
        Description
      </div>

      <div className="mb-12">
        {property?.propertyName} is located in{" "}
        {property?.city || "Santa Barbara"}, {property?.state || "CA"}.{" "}
        {property?.propertyDescription}
      </div>
    </div>
  );
};

export default PropertyDescriptionSection;
