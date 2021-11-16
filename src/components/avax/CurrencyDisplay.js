import { CurrencyDollarIcon } from "@heroicons/react/outline";
import useUI from "src/context/hooks/useUI";
import useAVAX from "src/context/queries/useAVAX";
import Round2DecimalPlaces from "src/utilities/math/Round2DecimalPlaces";
import AvaxSymbol from "./AvaxSymbol";

const CurrencyDisplay = ({
  balance,
  classNames,
  symbolClassNames = "w-5 h-5 mx-1",
}) => {
  const { currency } = useUI();
  const { data: AVAX } = useAVAX();

  if (currency === "USD") {
    balance = balance * AVAX.quote.USD.price;
    balance = Round2DecimalPlaces(balance);
  }

  const GetSymbol = () => {
    if (currency === "USD") {
      return <CurrencyDollarIcon className={"inline " + symbolClassNames} />;
    } else if (currency === "AVAX") {
      return <AvaxSymbol className={symbolClassNames} />;
    }
  };

  return (
    <span className={"flex items-center justify-center " + classNames}>
      {GetSymbol()}
      <span>
        {balance} {currency}
      </span>
    </span>
  );
};

export default CurrencyDisplay;
