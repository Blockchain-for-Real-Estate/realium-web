import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function PropertyCard({ property }) {
  return (
    <Link href={`/marketplace/${property.propertyId}`}>
      <div className="shadow h-full cursor-pointer">
        <div className="relative w-full h-48">
          <Image
            src="/images/coming-soon.jpg"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-6 space-y-2">
          <div className="text-indigo-600 text-sm">
            {property.propertyType || "Residential"}
          </div>
          <div className="text-gray-900 text-xl">
            {property.propertyName || "aslkdfjlaskjdf;aksdjf"}
          </div>
          <div className="text-gray-500 text-base">
            {property.propertyExcerpt ||
              "skldfjalsdjflaskjdfl;askjdflaksjdfl;askjdfl;aksjdf"}
          </div>
        </div>
      </div>
    </Link>
  );
}
