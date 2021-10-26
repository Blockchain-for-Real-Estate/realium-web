import Link from "next/link";
import PropertyArchive from "pages/marketplace/sections/PropertyArchive";

const HomeExploreSection = () => {

  return (
    <div className="px-2 pb-10">
      <PropertyArchive />

      <div className="text-center">
        <Link href="/marketplace">
          <button className="btn-primary px-4 py-2">View All</button>
        </Link>
      </div>
    </div>
  );
};

export default HomeExploreSection;
