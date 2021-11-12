import React from 'react'
import useUI from "context/hooks/useUI";
import { Buy } from '../transaction/Buy';
import { List } from '../transaction/List';

export function BuyListOffer() {
  let [currentTab, setCurrentTab] = React.useState(0);
  const { modal } = useUI();

  return (
    <div className="bg-white rounded-lg shadow-md">
      <div>
        <div className="relative">
          <div>
            <div>
              <div>
                <nav className="rounded-t-lg flex divide-x divide-gray-200 shadow-md">
                  <div
                    onClick={() => setCurrentTab(0)}
                    style={{ cursor: "pointer" }}
                    className={`${
                      currentTab === 0
                        ? "bg-white text-gray-700"
                        : "bg-gray-100"
                    } rounded-tl-lg text-gray-500 hover:text-gray-700 group relative min-w-0 flex-1 overflow-hidden py-3 px-4 text-base font-medium text-center hover:bg-gray-50 focus:z-10`}
                  >
                    <span>Buy</span>
                    <span
                      className={`${
                        currentTab === 0 ? "bg-indigo-600" : "bg-transparent"
                      } absolute inset-x-0 bottom-0 h-0.5`}
                    ></span>
                  </div>

                  <div
                    onClick={() => setCurrentTab(1)}
                    style={{ cursor: "pointer" }}
                    className={`${
                      currentTab === 1
                        ? "bg-white text-gray-700"
                        : "bg-gray-100"
                    } text-gray-500 hover:text-gray-700 group relative min-w-0 flex-1 overflow-hidden py-3 px-4 text-base font-medium text-center hover:bg-gray-50 focus:z-10`}
                  >
                    <span>List</span>
                    <span
                      className={`${
                        currentTab === 1 ? "bg-indigo-600" : "bg-transparent"
                      } absolute inset-x-0 bottom-0 h-0.5`}
                    ></span>
                  </div>

                  <div
                    onClick={() => setCurrentTab(2)}
                    style={{ cursor: "pointer" }}
                    className={`${
                      currentTab === 2
                        ? "bg-white text-gray-700"
                        : "bg-gray-100"
                    } rounded-tr-lg text-gray-500 hover:text-gray-700 group relative min-w-0 flex-1 overflow-hidden py-3 px-4 text-base font-medium text-center hover:bg-gray-50 focus:z-10`}
                  >
                    <span>Offer</span>
                    <span
                      className={`${
                        currentTab === 2 ? "bg-indigo-600" : "bg-transparent"
                      } absolute inset-x-0 bottom-0 h-0.5`}
                    ></span>
                  </div>
                </nav>
              </div>
            </div>
            {/* BUY */}
            {currentTab === 0 && (
              <div className="border-t-2 border-gray-100 rounded-b-lg pt-8 pb-1 px-6 bg-white shadow-md sm:px-10 sm:py-10">
                <div className="m-2">
                  <h4 className="font-semibold text-lg">Buying shares</h4>
                  <p className="text-sm mt-4 mb-12">
                    Interested in the property? Purchase some of the shares of
                    the property to become a part owner. Select your shares from
                    the list of sellers and become an owner of real estate in
                    minutes.
                  </p>
                </div>
                <div className="mt-16 mb-4 mx-4 flex">
                  <div className="flex-1 text-left">Average Price</div>
                  <div className="flex items-center text-indigo-500 text-right">
                    5.00
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 153 153"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-1"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M153 76.5C153 118.75 118.75 153 76.5 153C34.2502 153 0 118.75 0 76.5C0 34.2502 34.2502 0 76.5 0C118.75 0 153 34.2502 153 76.5ZM72.2494 21.5512L22.6284 108.776C20.8649 111.876 23.1037 115.725 26.6701 115.725H57.7531C59.4209 115.725 60.961 114.832 61.7892 113.384L96.0274 53.5368C96.8467 52.1048 96.8458 50.3458 96.025 48.9145L80.325 21.5372C78.5347 18.4154 74.0289 18.4231 72.2494 21.5512ZM90.0853 115.95H126.325C130.017 115.95 132.327 111.956 130.486 108.756L112.443 77.3996C110.601 74.1984 105.985 74.1898 104.131 77.3843L85.9337 108.741C84.0767 111.941 86.3855 115.95 90.0853 115.95Z"
                        fill="#4F46E5"
                      />
                    </svg>
                    /share
                  </div>
                </div>
                <div className="mt-4 mb-12 mx-4 flex">
                  <div className="flex-1 text-left">Average Hold</div>
                  <div className="flex-1 text-right text-indigo-500">
                    12 days
                  </div>
                </div>
                <button className="w-full btn-primary px-3 py-4" onClick={() => modal("Purchase Share", <Buy />)}>
                  Select and Buy
                </button>
                <div className="mb-4 sm:mb-0 mt-12 mx-4 flex">
                  <p className="flex-1 text-left text-gray-400 text-xs">
                    Current Balance
                  </p>
                    <p className="flex-1 text-right text-indigo-500 text-xs">
                      0 AVAX
                    </p>
                </div>
              </div>
            )}
            {/* LIST */}
            {currentTab === 1 && (
              <div className="border-t-2 border-gray-100 rounded-b-lg pt-8 pb-1 px-6 bg-white shadow-md sm:px-10 sm:py-10">
                <div className="m-2">
                  <h4 className="font-semibold text-lg">
                    List your token
                  </h4>
                  <p className="text-sm mt-4 mb-12">
                    List your token on the Realium marketplace. The listing
                    will show up when someone selects to purchase a token share.
                    Once your token(s) are listed, they are locked at their
                    current price.
                  </p>
                </div>
                <div className="mt-16 mb-4 mx-4 flex">
                  <div className="flex-1 text-left">Average Price</div>
                  <div className="flex items-center text-indigo-500 text-right">
                    5.00
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 153 153"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-1"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M153 76.5C153 118.75 118.75 153 76.5 153C34.2502 153 0 118.75 0 76.5C0 34.2502 34.2502 0 76.5 0C118.75 0 153 34.2502 153 76.5ZM72.2494 21.5512L22.6284 108.776C20.8649 111.876 23.1037 115.725 26.6701 115.725H57.7531C59.4209 115.725 60.961 114.832 61.7892 113.384L96.0274 53.5368C96.8467 52.1048 96.8458 50.3458 96.025 48.9145L80.325 21.5372C78.5347 18.4154 74.0289 18.4231 72.2494 21.5512ZM90.0853 115.95H126.325C130.017 115.95 132.327 111.956 130.486 108.756L112.443 77.3996C110.601 74.1984 105.985 74.1898 104.131 77.3843L85.9337 108.741C84.0767 111.941 86.3855 115.95 90.0853 115.95Z"
                        fill="#4F46E5"
                      />
                    </svg>
                    /share
                  </div>
                </div>
                <div className="mt-4 mb-12 mx-4 flex">
                  <div className="flex-1 text-left">Average Hold</div>
                  <div className="flex-1 text-right text-indigo-500">
                    12 days
                  </div>
                </div>
                <button className="w-full btn-primary px-3 py-4" onClick={() => modal("List Token", <List />)}>
                  List Token
                </button>
                <div className="mb-4 sm:mb-0 mt-12 mx-4 flex">
                  <p className="flex-1 text-left text-gray-400 text-xs">
                    Current Balance
                  </p>
                    <p className="flex-1 text-right text-indigo-500 text-xs">
                      0 AVAX
                    </p>
                </div>
              </div>
            )}
            {/* OFFER */}
            {currentTab === 2 && (
              <div>
                <div className="border-t-2 border-gray-100 rounded-b-lg pt-2 pb-1 px-6 bg-white shadow-md sm:px-10 sm:py-10 opacity-30">
                  <div className="m-2 space-y-6">
                    <h3 className="font-bold text-xl md:text-center align-middle underline">
                      COMING SOON
                    </h3>
                    <h4 className="font-semibold text-lg">
                      Submitting an offer
                    </h4>
                    <p className="text-sm">
                      Not seeing your desired price? Set your own price with an
                      offer. Offers are binding unless canceled. Sellers will be
                      able to see these prices and can decide to execute a
                      transaction.
                    </p>
                  </div>
                  <div className="mt-12 mb-2 mx-2">
                    <fieldset>
                      <div className="mt-1 bg-white rounded-md shadow-md -space-y-px w-full">
                        <div className="flex -space-x-px border rounded-t border-gray-900">
                          <div className="w-1/2 flex-1 min-w-0">
                            <input
                              type="text"
                              readOnly
                              className="rounded-tl focus:ring-white-500 focus:border-white-500 relative block w-full rounded-none bg-transparent focus:z-10 sm:text-sm border-white text-white text-shadow"
                              placeholder="Shares"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <input
                              name="shares"
                              type="text"
                              className="rounded-tr focus:ring-white-500 focus:border-white-500 text-right relative block w-full rounded-none bg-transparent focus:z-10 sm:text-sm border-l-white border-white"
                              placeholder="100"
                            />
                          </div>
                        </div>
                        <div className="flex -space-x-px border rounded-b border-gray-900">
                          <div className="w-1/2 flex-1 min-w-0">
                            <input
                              type="text"
                              readOnly
                              className="rounded-bl focus:ring-white-500 focus:border-white-500 relative block w-full rounded-none bg-transparent focus:z-10 sm:text-sm border-white text-white text-shadow"
                              placeholder="Share price"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <input
                              name="price"
                              type="text"
                              className="rounded-br focus:ring-white-500 focus:border-white-500 text-right relative block w-full rounded-none bg-transparent focus:z-10 sm:text-sm border-l-white border-white"
                              placeholder="0.38"
                            />
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                  <div className="mb-8 mx-2 text-right text-xs text-gray-300">
                    Total: 0 AVAX
                  </div>
                  <div className="my-4 space-y-3 text-center sm:m-1 sm:items-center">
                    <button
                      className="bg-indigo-500 text-white active:bg-indigo-500 text-xs w-full py-2 px-2 rounded shadow-sm hover:shadow-lg hover:bg-indigo-700 outline-none focus:outline-none ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => {}}
                    >
                      Sell Shares
                    </button>
                    <button
                      className="bg-indigo-200 text-indigo-600 active:bg-indigo-500 text-xs w-full py-2 px-2 rounded shadow-sm hover:shadow-lg hover:bg-indigo-300 outline-none focus:outline-none ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => {}}
                    >
                      View Offers
                    </button>
                  </div>
                  <div className="flex">
                    <p className="flex-1 text-left text-gray-400 text-xs">
                      Realium balance
                    </p>
                      <p className="flex-1 text-right text-indigo-500 text-xs">
                        0 AVAX
                      </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
