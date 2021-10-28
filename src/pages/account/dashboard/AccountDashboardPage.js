import AccountDashboardPortfolioSection from "./sections/AccountDashboardPortfolioSection";
import AccountDashboardTransactionsSection from "./sections/AccountDashboardTransactionsSection";

const AccountDashboardPage = () => {
  return (
    <div className="space-y-5">
      <AccountDashboardPortfolioSection />
      <AccountDashboardTransactionsSection />
    </div>
  );
};

export default AccountDashboardPage;
