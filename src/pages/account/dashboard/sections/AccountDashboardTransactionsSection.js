import React from 'react'
import TimeAgo from 'react-timeago'
import NumberFormat from "react-number-format";
import useUserTransactions from "src/context/queries/useUserTransactions";
import Heading2 from "src/components/general/Heading2";
import useUser from 'src/context/queries/useUser';

const AccountDashboardTransactionsSection = () => {
  const { data } = useUser();
  const userAddress = data.attributes["custom:wallet"];
  const { data: transactions, isLoading } = useUserTransactions();

  let [currentPage, setCurrentPage] = React.useState(1)
  let pages = []

  if (transactions) {
    var i,j,temparray,chunk = 10;
    for (i=0,j=transactions.length; i<j; i+=chunk) {
        temparray = transactions.slice(i,i+chunk);
        pages.push(temparray)
    }
  }

  const CONTRACT_ADDRESSES = ["0x1630BDb93d1fA86122f909b413403FbDd43D7790",
                            "0x16d9415883a907B7021D8C1D84D41ce1316f8Ef4",
                            "0x1771366C9F7fc9E903c67ac4cE24674126c448B3",
                            "0xfA9Ac35d59A58A6e178872269C83a02f108270a9",
                            "0xfAA15f1ff49376ba6Ff118fE45A85039242418EA",
                            "0x51e6bFC6169c3Bc0f970c2Cb8d1D8E6cF17aa6ee"];

  return (
    <div className="my-0">
      <Heading2
        title="Recent Transactions"
        subtitle="View your activity across the Realium platform. Monitor your on-chain transactions and see live summaries here."
      />
      <div className="mt-10 flex flex-col">
        <div className="-my-2 overflow-x-auto">
          <div className="py-2 align-middle inline-block min-w-full">
            <div className="sm:shadow-md overflow-hidden sm:rounded-lg">
              <table className="border-2 border-gray-100 m-0 p-0 min-w-full">
                <thead className="bg-gray-100 border-1 border-gray-700 divide-y p-3 uppercase text-md">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Time
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Event
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
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
                  {isLoading && <div className="text-center p-2">Getting Transactions...</div>}
                  {pages[0] !== undefined && pages[0] !== null
                    ? Object.keys(pages[currentPage - 1]).map((key) => (
                        <tr
                          key={key}
                          className="bg-white m-4 border-b border-gray-200 shadow-md rounded-md"
                        >
                          <td
                            className="px-6 py-4 whitespace-nowrap text-xs font-medium text-gray-900"
                            data-label="Time"
                          >
                            <TimeAgo
                              date={transactions[key].block_signed_at}
                              locale="en-US"
                            />
                          </td>
                          <td
                            className="px-6 py-4 whitespace-nowrap text-xs text-gray-500"
                            data-label="Event"
                          >
                            {pages[currentPage - 1][key].from_address == userAddress ? "BUY" : "SALE"}
                          </td>
                          <td
                            className="px-6 py-4 whitespace-nowrap flex items-center text-xs text-gray-500"
                            data-label="Price"
                          >
                            <NumberFormat
                              value={pages[currentPage - 1][key].value/1000000000000000000}
                              displayType={"text"}
                              thousandSeparator={true}
                            />
                            <div className="h-4 inline-flex px-1">
                              <svg
                                width="15"
                                height="15"
                                viewBox="0 0 153 153"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M153 76.5C153 118.75 118.75 153 76.5 153C34.2502 153 0 118.75 0 76.5C0 34.2502 34.2502 0 76.5 0C118.75 0 153 34.2502 153 76.5ZM72.2494 21.5512L22.6284 108.776C20.8649 111.876 23.1037 115.725 26.6701 115.725H57.7531C59.4209 115.725 60.961 114.832 61.7892 113.384L96.0274 53.5368C96.8467 52.1048 96.8458 50.3458 96.025 48.9145L80.325 21.5372C78.5347 18.4154 74.0289 18.4231 72.2494 21.5512ZM90.0853 115.95H126.325C130.017 115.95 132.327 111.956 130.486 108.756L112.443 77.3996C110.601 74.1984 105.985 74.1898 104.131 77.3843L85.9337 108.741C84.0767 111.941 86.3855 115.95 90.0853 115.95Z"
                                  fill="#374151"
                                />
                              </svg>
                            </div>
                          </td>
                          <td
                            className="px-6 py-4 whitespace-nowrap text-xs text-gray-500"
                            data-label="Asset"
                          >
                            {pages[currentPage - 1][key].log_events[0].sender_name}
                          </td>
                          <td
                            className="px-6 py-4 whitespace-nowrap text-xs font-medium justify-end"
                            data-label="Tx"
                          >
                              <div className="object-right">
                                <a
                                  href={`https://testnet.snowtrace.io/tx/${
                                    pages[currentPage - 1][key].tx_hash
                                  }`}
                                  className="text-indigo-600 hover:text-indigo-900"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M8.3335 5.00016H5.00016C4.07969 5.00016 3.3335 5.74635 3.3335 6.66683V15.0002C3.3335 15.9206 4.07969 16.6668 5.00016 16.6668H13.3335C14.254 16.6668 15.0002 15.9206 15.0002 15.0002V11.6668M11.6668 3.3335H16.6668M16.6668 3.3335V8.3335M16.6668 3.3335L8.3335 11.6668"
                                      stroke="#4F46E5"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </a>
                              </div>
                          </td>
                        </tr>
                      ))
                    : null}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDashboardTransactionsSection;
