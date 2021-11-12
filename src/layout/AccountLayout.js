import DefaultLayout from "./DefaultLayout";
import AccountSidebar from "./sidebars/AccountSidebar";

const AccountLayout = ({ children }) => {
  return (
    <DefaultLayout>
      <div className="bg-gray-50 h-full">
        <div className="flex flex-col md:flex-row px-6 py-6 md:py-8 md:px-6 max-w-7xl m-auto">
          <div className="w-full md:w-72 md:block py-6 bg-white md:bg-transparent md:bg-none shadow md:shadow-none rounded-lg my-8 md:mt-0 md:pr-8">
            <AccountSidebar />
          </div>
          <div className="flex-1">{children}</div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default AccountLayout;
