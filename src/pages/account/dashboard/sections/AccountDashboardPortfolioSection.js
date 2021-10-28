import Heading2 from "components/general/Heading2";
import useUserAssets from "context/queries/useUserAssets";

const AccountDashboardPortfolioSection = () => {
  const { data } = useUserAssets();

  return (
    <div>
      <Heading2
        title="Your Portfolio"
        subtitle="View your purchased Realium assets. Manage your purchses and sell the properties you no longer want to hold. "
      />
    </div>
  );
};

export default AccountDashboardPortfolioSection;
