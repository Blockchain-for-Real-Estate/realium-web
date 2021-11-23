import AccountTransactionsListingsSection from "./sections/AccountTransactionsListingsSection";
import AccountTransactionsOffersSection from "./sections/AccountTransactionsOffersSection";

const AccountTransactionsPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <AccountTransactionsListingsSection />
      <AccountTransactionsOffersSection />
    </div>
  );
};

export default AccountTransactionsPage;
