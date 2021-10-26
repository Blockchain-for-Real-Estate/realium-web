import useProperties from "context/queries/useProperties";
import PropertyCard from "components/properties/PropertyCard";
import Heading1 from "components/general/Heading1";

export default function PropertyArchive() {
  const { data: properties, isLoading, isError } = useProperties();

  if (isLoading) return <div>Loading Wave</div>;
  if (isError) return <div>Error Screen</div>;

  return (
    <>
    <Heading1
        title="Explore the marketplace"
        description="View the properties that are currently available on the Realium marketplace and choose the best investment for you."
      />

      <div className="max-w-7xl mx-auto my-10">
        <div className="max-w-7xl mx-auto sm:grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:max-w-none">
          {properties?.slice(0, 6).map((property) => (
            <div className="my-6 sm:my-0" key={property.propertyId}>
              <PropertyCard property={property} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}