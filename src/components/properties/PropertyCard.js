import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function PropertyCard({ property }) {
  return (
    <Link href={`/marketplace/${property.propertyId}`} passHref>
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
    </Link>
  );
}
