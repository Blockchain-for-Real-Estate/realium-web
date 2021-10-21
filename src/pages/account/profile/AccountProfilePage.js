import AccountProfileNotificationSection from "./sections/AccountProfileNotificationsSection";
import AccountProfileInfoSection from "./sections/AccountProfileInfoSection";

const AccountProfilePage = () => {
  return (
    <div className="space-y-6">
      <AccountProfileInfoSection />
      <AccountProfileNotificationSection />
    </div>
  );
};

export default AccountProfilePage;
