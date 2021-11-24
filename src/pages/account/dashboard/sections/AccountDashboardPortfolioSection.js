import Link from "next/link";
import Image from "next/image";
import useProperties from "src/context/queries/useProperties";
import Heading2 from "src/components/general/Heading2";
import useUserAssets from "src/context/queries/useUserAssets";

const AccountDashboardPortfolioSection = () => {
  const { data } = useUserAssets();
  const { data: properties, isLoading } = useProperties();

  return (
    <div>
      <Heading2
        title="Your Portfolio"
        subtitle="View your purchased Realium assets. Manage your purchases and sell the properties you no longer want to hold. "
      />
        <dl className="mt-10 space-y-10">
          {isLoading && <div className="text-center p-2">Retrieving Portfolio...</div>}
          {!isLoading && data && Object.values(data).reduce((a, b) => Number(a) + Number(b), 0) == 0 &&
            <div className="mb-16 xl:mb-0 w-full flex flex-col items-center justify-center">
            <h1 className="text-xl text-indigo-700 font-black uppercase">
              No Current Holdings
            </h1>
            <Link href={`/marketplace/`} passHref>Get started by shopping the marketplace.</Link>
          </div>}
          {data && properties?.map((property) => (
            Number(data[property.smartContractAddress]) > 0 ?  
            <Link key={property.propertyId} href={`/marketplace/${property.propertyId}`} passHref>
              <div className="relative rounded-lg border border-gray-300 bg-white shadow-md items-center space-x-3 cursor-pointer hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
              <div className="relative flex-shrink-0 grid grid-cols-1 xl:flex xl:flex-cols items-center">
                <div className="relative flex-1 h-48 xl:h-28">
                  <Image className="rounded-t-md xl:rounded-l-lg xl:rounded-tr-none" src={`/images/${property.propertyId}.jpg`} layout="fill" objectFit="cover" alt="Coming Soon"/>
                </div>
                <div className="flex-1 xl:px-2 xl:py-0 px-4 py-4">
                    <div className="xl:align-middle xl:items-center xl:space-y-3 space-y-4">
                        <div className="text-black font-bold mr-8 xl:mr-1 xl:text-left xl:m-1 truncate">
                            {property.propertyName}
                            <div className="text-xs text-gray-500 pt-1 xl:text-left mb-0 truncate">
                                {property.city}, {property.state}
                            </div>
                        </div>
                        <div className="text-black text-sm font-semibold xl:mr-1 xl:text-left xl:m-1 flex items-center justify-between" style={{textDecoration: "none"}}>
                            Tokens: {`${data[property.smartContractAddress]}`}
                            <button className="bg-indigo-500 text-white active:bg-indigo-500 text-xs py-2 px-2 rounded hover:bg-indigo-600 outline-none focus:outline-none ease-linear transition-all duration-150" type="button"
                            >
                            List Tokens
                            </button>
                        </div>
                    </div>
                </div>
                </div>
              </div>
            </Link>
            :
            null
            ))}
        </dl>
    </div>
  );
};

export default AccountDashboardPortfolioSection;
