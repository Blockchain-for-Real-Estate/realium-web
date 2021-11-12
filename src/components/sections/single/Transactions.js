import React from "react";
import { titleCase } from "title-case";
import NumberFormat from "react-number-format";
import TimeAgo from "react-timeago";
import { ApiEventService } from "../api/services/event.service";

export function Transactions(props) {
  let [transactions, setTransactions] = React.useState([]);
  let [currentPage, setCurrentPage] = React.useState(1);
  let [startRange, setStartRange] = React.useState(1);
  let [endRange, setEndRange] = React.useState(10);
  let pages = [];
  const setNotify = props.setNotify;
  const listing = props.listing;

  React.useEffect(() => {
    try {
      let transactionViaApi = new ApiEventService();
      transactionViaApi
        .getFilteredTransactions(listing.propertyId)
        .then((res) => {
          const txs = res.data;
          setTransactions(txs);
        });
    } catch {
      setTransactions(null);
      setNotify &&
        setNotify({
          msg: `There was an error property data.`,
          color: "red",
          show: true,
        });
    }
  }, [listing, setNotify]);

  var i,
    j,
    temparray,
    chunk = 10;
  for (i = 0, j = transactions.length; i < j; i += chunk) {
    temparray = transactions.slice(i, i + chunk);
    pages.push(temparray);
  }

  return (
    /* Transactions Table */
    <div className="mt-4 max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="bg-white">
        <div className="sm:flex sm:flex-col sm:align-center mb-6">
          <h1 className="text-4xl font-extrabold text-gray-900 text-center">
            Chain History
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
            View recent blockchain transaction activity for{" "}
            {props.listing.propertyName}. Navigate to see transaction-specific
            details provided by AvaxScan.
          </p>
        </div>
        {transactions && pages && (
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-8 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg mb-4">
                  {transactions.length > 0 ? (
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Event
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Quantity Listed
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            From
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            To
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Time
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Tx
                          </th>
                        </tr>
                      </thead>
                      {pages[0] !== undefined && pages[0] !== null ? (
                        <tbody className="bg-white divide-y-2 divide-gray-300 sm:divide-y sm:divide-gray-200">
                          {pages[currentPage - 1].map((transaction) => (
                            <TransactionRow
                              key={transaction.eventId}
                              transaction={transaction}
                            />
                          ))}
                        </tbody>
                      ) : null}
                    </table>
                  ) : (
                    <div className="content-center flex flex-wrap font-medium h-24 justify-center text-gray-500">
                      No history to show
                    </div>
                  )}
                  <nav
                    className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
                    aria-label="Pagination"
                  >
                    <div className="hidden sm:block">
                      <p className="text-sm text-gray-700">
                        Showing{" "}
                        <span className="font-medium">{startRange}</span> to{" "}
                        <span className="font-medium">{endRange}</span> of{" "}
                        <span className="font-medium">
                          {transactions.length}
                        </span>{" "}
                        results
                      </p>
                    </div>
                    <div className="flex-1 flex justify-between sm:justify-end">
                      {currentPage > 1 ? (
                        <button
                          onClick={() => {
                            setCurrentPage(currentPage - 1);
                            setStartRange(startRange - 10);
                            setEndRange(
                              endRange - pages[currentPage - 1].length
                            );
                          }}
                          className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                        >
                          Previous
                        </button>
                      ) : null}
                      {currentPage < pages.length ? (
                        <button
                          onClick={() => {
                            setCurrentPage(currentPage + 1);
                            setStartRange(startRange + 10);
                            setEndRange(endRange + pages[currentPage].length);
                          }}
                          className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                        >
                          Next
                        </button>
                      ) : null}
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function TransactionRow(props) {
  return (
    <tr className="mb-10">
      <td
        className="px-6 py-4 whitespace-nowrap text-xs text-gray-500"
        data-label="Event"
      >
        {/* TODO: add icons here */}
        {titleCase(props.transaction.eventType.toLowerCase())}
      </td>
      <td
        className="px-6 py-4 whitespace-nowrap sm:flex items-center text-xs text-gray-500"
        data-label="Quantity Listed"
      >
        <NumberFormat
          className="inline-flex"
          value={props.transaction.quantity}
          displayType={"text"}
          thousandSeparator={true}
        />
        <div className="px-1 inline-flex">@</div>
        <NumberFormat
          className="inline-flex"
          value={props.transaction.listedPrice}
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
      <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
        {/* add username? */}
        {props.transaction.eventCreator.walletAddress}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
        {/* add username? */}
        {props.transaction.eventType !== "LIST" &&
          props.transaction.tokenOwner.walletAddress}
      </td>
      <td
        className="px-6 py-4 whitespace-nowrap text-xs text-gray-500"
        data-label="Time"
      >
        <TimeAgo date={props.transaction.eventDateTime} />
      </td>
      <td
        className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
        data-label="TX"
      >
        {props.transaction.eventType === "SALE" && (
          <a
            href={`https://testnet.avascan.info/blockchain/x/tx/${props.transaction.txNFTId}`}
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
        )}
      </td>
    </tr>
  );
}
