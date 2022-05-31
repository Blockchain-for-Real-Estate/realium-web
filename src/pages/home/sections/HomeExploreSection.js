import Link from "next/link";
import Image from "next/image";
import ComingSoon from "src/pages/marketplace/sections/ComingSoon";
import PropertyArchive from "src/pages/marketplace/sections/PropertyArchive";

const HomeExploreSection = () => {
  return (
    <div className="px-2 pb-10">
      <ComingSoon />
      <div className="text-center">
        <Link href="/marketplace" passHref>
          <button
            disabled
            className="bg-white border border-indigo-500 px-4 py-2 rounded text-indigo-500"
          >
            Coming soon
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeExploreSection;
