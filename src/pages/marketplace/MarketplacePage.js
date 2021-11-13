import React from "react";
import PropertyArchive from "src/pages/marketplace/sections/PropertyArchive";
import { MARKETPLACE_FAQS } from "src/data/faqs";
import Faq from "src/components/general/Faq";
import Heading1 from "src/components/general/Heading1";

export default function MarketplacePage(props) {
  return (
    <>
      <div className="max-w-7xl mx-auto py-10">
        <PropertyArchive />
      </div>

      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <Faq questions={MARKETPLACE_FAQS} />
        </div>
      </div>
    </>
  );
}
