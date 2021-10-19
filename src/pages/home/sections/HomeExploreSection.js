import Link from "next/link";
import Heading1 from "components/general/Heading1";
import PropertyCard from "components/properties/PropertyCard";
import useProperties from "context/queries/useProperties";

const HomeExploreSection = () => {
  const { data: properties } = useProperties();

  return (
    <div className="px-2 pb-10">
      <Heading1
        title="Explore the marketplace"
        description="View the properties that are currently available on the Realium marketplace and choose the best investment for you."
      />

      <div className="max-w-7xl mx-auto my-10">
        <div className="max-w-7xl mx-auto grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:max-w-none">
          {properties?.slice(0, 6).map((property) => (
            <div key={property.propertyId} className="l-grid__item">
              <PropertyCard property={property} />
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <Link href="/marketplace">
          <button className="btn-primary px-4 py-2">View All</button>
        </Link>
      </div>
    </div>
  );
};

export default HomeExploreSection;
