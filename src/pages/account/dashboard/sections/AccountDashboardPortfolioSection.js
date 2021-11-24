import Link from "next/link";
import Image from "next/image";
import Heading2 from "src/components/general/Heading2";
import useUserAssets from "src/context/queries/useUserAssets";

const AccountDashboardPortfolioSection = () => {
  const { data: properties } = useUserAssets();

  // if (isLoading) return <div>Loading Wave</div>;
  // if (isError) return <div>Error Screen</div>;

  return (
    <div>
      <Heading2
        title="Your Portfolio"
        subtitle="View your purchased Realium assets. Manage your purchses and sell the properties you no longer want to hold. "
      />
        <div className="py-12 bg-gray-50 overflow-hidden sm:pb-12 lg:py-18">
        <div className="max-w-xl mx-auto px-8 sm:px-6 lg:px-8 lg:max-w-7xl">
            <div className="relative mt-2 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-top">
            <div className="relative">
                <dl className="mt-10 space-y-10">
                    <div className="grid grid-cols-1 gap-6">
                    {properties?.map((property) => (
                        // eslint-disable-next-line
                        //alreadyListed = lodash.groupBy(tokens[key], "listed"),
                    <div key={property.propertyId} className="relative rounded-lg border border-gray-300 bg-white shadow-md flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                        <div className="grid grid-cols-1 sm:flex sm:flex-cols items-center">
                        <Link to={`/marketplace/${property.propertyId}`} className="flex-shrink-0" style={{textDecoration: "none"}}>
                            <Image className="h-48 w-full object-fill rounded-t-md sm:w-48 sm:h-full sm:object-fill sm:rounded-l-sm sm:rounded-tr-none" src="images/coming-soon.jpg" alt=""/>
                        </Link>
                        <div className="flex-1 min-w-0 space-x-2 pt-2 pb-2 pl-2">
                            <div className="grid grid-cols-1 sm:grid-cols-3 sm:align-middle sm:items-center">
                                <Link to={`/marketplace/${property.propertyId}`} className="text-black font-semibold grid grid-cols-2 mr-8 sm:mr-1 text-center sm:text-left sm:grid-cols-1 sm:m-2" style={{textDecoration: "none"}}>
                                    Address
                                    <p className="text-xs text-gray-500 pt-1 text-center sm:text-left mb-0">
                                        {property.streetAddress}
                                        <br/>
                                        {property.city}, {property.state}
                                    </p>
                                </Link>
                                <Link to={`/marketplace/${property.propertyId}`} className="text-black font-semibold grid grid-cols-2 mr-8 sm:mr-1 text-center sm:text-left sm:grid-cols-1 sm:m-2" style={{textDecoration: "none"}}>
                                    Shares:
                                    <p className="text-xs text-gray-500 pt-1 text-center sm:text-left mb-0">
                                        {alreadyListed['true'] ?
                                        <><NumberFormat
                                            value={alreadyListed['true'].length}
                                            displayType={'text'}
                                            thousandSeparator={true}
                                            suffix={` ${alreadyListed['true'].length > 1 ? "shares" : "share"} listed`}
                                            />
                                        <br/></>
                                            :
                                            null
                                        }
                                    </p>
                                </Link>
                                <div className="space-y-2 text-center sm:m-1 sm:items-center">
                                    <button className="bg-gray-50 text-indigo-600 active:bg-indigo-500 text-xs w-4/5 py-2 px-2 rounded hover:bg-gray-100 outline-none focus:outline-none ease-linear transition-all duration-150" type="button"
                                    >
                                    Shares Listed
                                    </button>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    ))}
                    </div>
                </dl>
            </div>
            <div className="mt-16 sm:mt-8 -mx-4 relative lg:mt-0" aria-hidden="true">
            <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-1 lg:gap-8 lg:items-top">
                <div className="mx-3 lg:col-start-2">
                <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="sm:shadow-md overflow-hidden sm:rounded-lg">
                        {/* <table className="border-2 border-gray-100 m-0 p-0 min-w-full">
                        <thead className="bg-gray-100 border-1 border-gray-700 divide-y p-3 uppercase text-md">
                            <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Time
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Event
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Quantity
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Asset
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Tx
                            </th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(pages[currentPage-1]).map((key) => (
                            <tr key={key} className="bg-white m-4 border-b border-gray-200 shadow-md rounded-md">
                            <td className="px-6 py-4 whitespace-nowrap text-xs font-medium text-gray-900" data-label="Time">
                                <TimeAgo date={events[key].eventDateTime} locale="en-US"/>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500" data-label="Event">
                                {pages[currentPage-1][key].eventType}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap flex items-center text-xs text-gray-500" data-label="Quantity">
                                <NumberFormat
                                    value={pages[currentPage-1][key].quantity}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                />
                                <div className="px-1">@</div>
                                <NumberFormat
                                        value={pages[currentPage-1][key].listedPrice}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                />
                                <div className="h-4 inline-flex px-1">
                                    <svg width="15" height="15" viewBox="0 0 153 153" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M153 76.5C153 118.75 118.75 153 76.5 153C34.2502 153 0 118.75 0 76.5C0 34.2502 34.2502 0 76.5 0C118.75 0 153 34.2502 153 76.5ZM72.2494 21.5512L22.6284 108.776C20.8649 111.876 23.1037 115.725 26.6701 115.725H57.7531C59.4209 115.725 60.961 114.832 61.7892 113.384L96.0274 53.5368C96.8467 52.1048 96.8458 50.3458 96.025 48.9145L80.325 21.5372C78.5347 18.4154 74.0289 18.4231 72.2494 21.5512ZM90.0853 115.95H126.325C130.017 115.95 132.327 111.956 130.486 108.756L112.443 77.3996C110.601 74.1984 105.985 74.1898 104.131 77.3843L85.9337 108.741C84.0767 111.941 86.3855 115.95 90.0853 115.95Z" fill="#374151"/>
                                    </svg>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500" data-label="Asset">
                                {pages[currentPage-1][key].property.streetAddress}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-xs font-medium justify-end" data-label="Tx">
                                {pages[currentPage-1][key].eventType === "SALE" &&
                                    <div className="object-right">
                                        <a href={`https://testnet.avascan.info/blockchain/x/tx/${pages[currentPage-1][key].txNFTId}`} className="text-indigo-600 hover:text-indigo-900" target="_blank" rel="noreferrer">
                                            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.3335 5.00016H5.00016C4.07969 5.00016 3.3335 5.74635 3.3335 6.66683V15.0002C3.3335 15.9206 4.07969 16.6668 5.00016 16.6668H13.3335C14.254 16.6668 15.0002 15.9206 15.0002 15.0002V11.6668M11.6668 3.3335H16.6668M16.6668 3.3335V8.3335M16.6668 3.3335L8.3335 11.6668" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </a>
                                    </div>
                                }
                            </td>
                            </tr>
                            ))}
                        </tbody>
                        </table>
                        {pages.length>0 ?
                        <nav
                        className="bg-gray-100 px-4 py-3 flex items-center justify-between sm:px-6"
                        aria-label="Pagination"
                        >
                        <div className="hidden sm:block">
                            <p className="text-sm text-gray-700">
                            Showing <span className="font-medium">{startRange}</span> to <span className="font-medium">{endRange}</span> of{' '}
                            <span className="font-medium">{events.length}</span> results
                            </p>
                        </div>
                        <div className="flex-1 flex justify-between sm:justify-end">
                            {currentPage>1 ? 
                            <button
                            onClick={() => {
                                setCurrentPage(currentPage-1)
                                setStartRange(startRange-10)
                                setEndRange(endRange-pages[currentPage-1].length)
                            }}
                            className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                            >
                            Previous
                            </button>: null }
                            {currentPage<pages.length ? 
                            <button
                            onClick={() => {
                                setCurrentPage(currentPage+1)
                                setStartRange(startRange+10)
                                setEndRange(endRange+pages[currentPage].length)
                            }}
                            className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                            >
                            Next
                            </button>: null }
                        </div>
                        </nav>
                        : null } */}
                    </div>
                    </div>
                </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        </div>
        {/* <div>
            <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
                    <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Frequently asked questions
                    </h2>
                    <dl className="mt-6 space-y-6 divide-y divide-gray-200">
                        {ACCOUNT_FAQS.map(faq => (
                            <CollapsableSection
                                title={faq.title}
                                text={faq.text}
                                key={faq.title}
                            />
                        ))}
                    </dl>
                </div>
            </div>
        </div> */}
    </div>
  );
};

export default AccountDashboardPortfolioSection;
