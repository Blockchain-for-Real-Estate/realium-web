import useUserAvaxBalance from "src/context/queries/useUserAvaxBalance";
import NumberFormat from "react-number-format";

const AccountBalance = () => {
  const { data: balance } = useUserAvaxBalance();

  return (
    <div className="border border-indigo-500">
      <NumberFormat value={balance} displayType="text" />
    </div>
  );
};

export default AccountBalance;
