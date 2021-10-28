const AuthBox = ({ title, description, footer, children, setAuthPage }) => {
  return (
    <div className="w-full max-w-sm shadow-md border border-gray-100 rounded-lg p-4 bg-gray-50">
      <div className="pb-4">
        <h4 className="text-xl text-gray-900 font-bold">{title}</h4>
        <div>{description}</div>
      </div>
      {children}
      <div className="mt-6 pb-4">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2  bg-gray-50 text-gray-500">
              {footer.text}
              <button
                onClick={() => setAuthPage(footer.page)}
                className="text-indigo-500"
              >
                {footer.linkText}
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthBox;
