import AccountDashboardPortfolioSection from "./sections/AccountDashboardPortfolioSection";
import AccountDashboardTransactionsSection from "./sections/AccountDashboardTransactionsSection";

const AccountDashboardPage = () => {
  return (
    <div className="xl:flex xl:flex-cols xl:space-x-12">
      <AccountDashboardPortfolioSection />
      <AccountDashboardTransactionsSection />
    </div>
  );
};

export default AccountDashboardPage;
