const List = () => {
  return (
    <div className="border-t-2 border-gray-100 rounded-b-lg pt-8 pb-1 px-6 bg-white shadow-md sm:px-10 sm:py-10">
      <div className="m-2">
        <h4 className="font-semibold text-lg">List your token</h4>
        <p className="text-sm mt-4 mb-12">
          List your token on the Realium marketplace. The listing will show up
          when someone selects to purchase a token share. Once your token(s) are
          listed, they are locked at their current price.
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
        <div className="flex-1 text-right text-indigo-500">12 days</div>
      </div>
      <button
        className="w-full btn-primary px-3 py-4"
        onClick={() => modal("List Token", <List />)}
      >
        List Token
      </button>
      <div className="mb-4 sm:mb-0 mt-12 mx-4 flex">
        <p className="flex-1 text-left text-gray-400 text-xs">
          Current Balance
        </p>
        <p className="flex-1 text-right text-indigo-500 text-xs">0 AVAX</p>
      </div>
    </div>
  );
};

export default List;
