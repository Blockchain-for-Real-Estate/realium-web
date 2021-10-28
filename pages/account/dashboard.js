import AccountDashboardPage from "pages/account/dashboard/AccountDashboardPage";

const Page = (props) => <AccountDashboardPage {...props} />;

Page.title = null;
Page.description = null;
Page.layout = "account";
Page.restricted = true;
export default Page;
