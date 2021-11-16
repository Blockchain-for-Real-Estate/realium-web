import AccountFaucetSection from "./sections/AccountWalletFaucetSection";
import AccountWalletIdSection from "./sections/AccountWalletAddressSection";
import AccountWalletManageSection from "./sections/AccountWalletManageSection";

const AccountWalletPage = () => {
  return (
    <div className="space-y-5">
      <AccountWalletIdSection />
      <AccountWalletManageSection />
      <AccountFaucetSection />
    </div>
  );
};

export default AccountWalletPage;
