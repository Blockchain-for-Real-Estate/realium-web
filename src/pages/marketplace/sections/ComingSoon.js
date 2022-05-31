import useProperties from "src/context/queries/useProperties";
import Image from "next/image";
import Heading1 from "src/components/general/Heading1";

export default function ComingSoon() {
  const { data: properties, isLoading, isError } = useProperties();

  if (isLoading) return <div>Loading Wave</div>;
  if (isError) return <div>Error Screen</div>;

  return (
    <>
      <Heading1
        title="Explore the marketplace"
        description="View the properties for sale on the Realium marketplace and find your ideal investment."
      />
      <div className="relative h-80 mb-10">
        <Image
          src="/images/marketplace-coming-soon.svg"
          layout="fill"
          // objectFit="cover"
          alt="Coming Soon"
          // className="rounded-t sm:rounded-t-lg"
        />
      </div>
      {/* <div className="max-w-7xl mx-auto my-10">
        <div className="max-w-7xl mx-4 sm:grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:max-w-none">
          {properties?.slice(0, 3).map((property) => (
            <div className="my-6 sm:my-0" key={property.propertyId}>
              <div className="shadow h-full cursor-pointer rounded sm:rounded-lg">
                <div className="relative h-48">
                  {property.images[0] && (
                    <Image
                      src={property.images[0]}
                      layout="fill"
                      objectFit="cover"
                      alt="Coming Soon"
                      className="rounded-t sm:rounded-t-lg"
                    />
                  )}
                </div>
                <div className="p-6 space-y-2">
                  <div className="text-indigo-600 text-sm truncate">
                    {property.propertyType || "Residential"}
                  </div>
                  <div className="text-gray-900 text-xl truncate">
                    {property.propertyName || "New Property"}
                  </div>
                  <div className="text-gray-500 text-base truncate">
                    {property.propertyDescription ||
                      "Luxurious residential property located in the temperate west coast."}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </>
  );
}
