import AccountDashboardPage from "src/pages/account/dashboard/AccountDashboardPage";

const Page = (props) => <AccountDashboardPage {...props} />;

Page.title = "Account Dashboard";
Page.description = null;
Page.layout = "account";
Page.restricted = true;
export default Page;
