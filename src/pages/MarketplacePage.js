import React from "react";
import ListingArchive from "components/sections/archives/ListingArchive";
import { MARKETPLACE_FAQS } from "data/static/faqs";
import Faq from "components/sections/general/Faq";
import Heading1 from "components/sections/headings/Heading1";

export default function MarketplacePage(props) {
  return (
    <>
      <Heading1
        title="Explore the marketplace"
        description="View the properties that are currently available on the Realium marketplace and choose the best investment for you."
      />

      <div className="max-w-7xl mx-auto py-10">
        <ListingArchive />
      </div>

      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <Faq questions={MARKETPLACE_FAQS} />
        </div>
      </div>
    </>
  );
}
