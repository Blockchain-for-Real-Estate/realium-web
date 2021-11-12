import useUserBalance from "context/queries/useUserBalance";
import NumberFormat from "react-number-format";
import AvaxRound from "utilities/avax/AvaxRound";

const AccountBalance = () => {
  const { data: balance } = useUserBalance();
  return (
    <div className="border border-indigo-500">
      <NumberFormat value={AvaxRound(balance)} displayType="text" />
    </div>
  );
};

export default AccountBalance;
