import { useEffect, useState } from "react";
import CurrencyDisplay from "src/components/avax/CurrencyDisplay";
import Heading2 from "src/components/general/Heading2";
import TxConfirmModal from "src/components/modals/TxConfirmModal";
import useUserAvaxBalance from "src/context/queries/useUserAvaxBalance";
import CreateAvaxSendTx from "src/utilities/avax/CreateAvaxSendTx";

const AccountWalletManageSection = () => {
  const [amount, setAmount] = useState("");
  const [toAddress, setToAddress] = useState("");

  const { data: balance } = useUserAvaxBalance();

  return (
    <div className="border-b border-gray-200 bg-white rounded-lg shadow p-5">
      <div className="flex justify-between">
        <Heading2
          title="Send AVAX"
          subtitle="Here you can view your balance and send AVAX to another wallet"
        />
        <div>
          Current Balance
          <CurrencyDisplay balance={balance} avaxAlways />
        </div>
      </div>
      <div>
        <div>
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div>
          <label>Wallet Address</label>
          <input
            type="text"
            value={toAddress}
            onChange={(e) => setToAddress(e.target.value)}
          />
        </div>
        <TxConfirmModal
          toAddress={toAddress}
          amount={amount}
          buttonText="Proceed"
          buttonClasses="btn-primary h-full p-2"
        />
      </div>
    </div>
  );
};

export default AccountWalletManageSection;
