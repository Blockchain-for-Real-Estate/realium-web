import AccountFaucetSection from "./sections/AccountFaucetSection";
import AccountWalletIdSection from "./sections/AccountWalletAddressSection";

const AccountWalletPage = () => {
  return (
    <div className="space-y-5">
      <AccountWalletIdSection />
      <AccountFaucetSection />
    </div>
  );
};

export default AccountWalletPage;
