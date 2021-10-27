import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function PropertyCard({ property }) {
  return (
    <Link href={`/marketplace/${property.propertyId}`}>
      <div className="shadow h-full cursor-pointer rounded sm:rounded-lg">
        <div className="relative h-48">
          <Image
            src="/images/coming-soon.jpg"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-6 space-y-2">
          <div className="text-indigo-600 text-sm truncate">
            {property.propertyType || "Residential"}
          </div>
          <div className="text-gray-900 text-xl truncate">
            {property.propertyName || "aslkdfjlaskjdf;aksdjf"}
          </div>
          <div className="text-gray-500 text-base truncate">
            {property.propertyExcerpt ||
              "skldfjalsdjflaskjdfl;askjdflaksjdfl;askjdfl;aksjdf"}
          </div>
        </div>
      </div>
    </Link>
  );
}
