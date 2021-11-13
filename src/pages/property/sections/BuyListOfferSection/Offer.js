const Offer = () => {
  return (
    <div>
      <div className="border-t-2 border-gray-100 rounded-b-lg pt-2 pb-1 px-6 bg-white shadow-md sm:px-10 sm:py-10 opacity-30">
        <div className="m-2 space-y-6">
          <h3 className="font-bold text-xl md:text-center align-middle underline">
            COMING SOON
          </h3>
          <h4 className="font-semibold text-lg">Submitting an offer</h4>
          <p className="text-sm">
            Not seeing your desired price? Set your own price with an offer.
            Offers are binding unless canceled. Sellers will be able to see
            these prices and can decide to execute a transaction.
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
          <p className="flex-1 text-right text-indigo-500 text-xs">0 AVAX</p>
        </div>
      </div>
    </div>
  );
};

export default Offer;
