import Heading2 from "src/components/general/Heading2";
import AccountSecurityTOTPSection from "./AccountSecurityAuthenticatorSection";

const AccountSecurityMFASection = () => {
  return (
    <div className="border-gray-200 bg-white rounded-lg shadow p-4">
      <Heading2
        title="Two-Factor Authentication"
        subtitle="Enable two factor authentication on login to further protect your account"
      />
      <AccountSecurityTOTPSection />
    </div>
  );
};

export default AccountSecurityMFASection;
