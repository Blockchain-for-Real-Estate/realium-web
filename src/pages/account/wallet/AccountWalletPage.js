import AccountFaucetSection from "./sections/AccountFaucetSection";
import AccountWalletIdSection from "./sections/AccountWalletIdSection";

const AccountWalletPage = () => {
  return (
    <div className="space-y-5">
      <AccountWalletIdSection />
      <AccountFaucetSection />
    </div>
  );
};

export default AccountWalletPage;
