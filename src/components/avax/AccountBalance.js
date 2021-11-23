import useUserAvaxBalance from "src/context/queries/useUserAvaxBalance";

import useUI from "src/context/hooks/useUI";
import CurrencyDisplay from "./CurrencyDisplay";

const AccountBalance = () => {
  const { data: balance } = useUserAvaxBalance();
  const { toggleCurrency } = useUI();

  return (
    <div
      onClick={toggleCurrency}
      className="border-2 border-indigo-500 cursor-pointer py-2 bg-indigo-200 rounded shadow px-2"
    >
      <CurrencyDisplay
        balance={balance}
        classNames="font-semibold text-gray-700"
      />
    </div>
  );
};

export default AccountBalance;
