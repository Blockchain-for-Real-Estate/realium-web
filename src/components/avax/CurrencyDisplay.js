import { CurrencyDollarIcon } from "@heroicons/react/outline";
import useUI from "src/context/hooks/useUI";
import useAVAX from "src/context/queries/useAVAX";
import Round2DecimalPlaces from "src/utilities/math/Round2DecimalPlaces";
import AvaxSymbol from "./AvaxSymbol";

const CurrencyDisplay = ({
  balance,
  avaxAlways = false,
  classNames,
  symbolClassNames = "w-5 h-5 mx-1",
}) => {
  const { currency } = useUI();
  const { data: AVAX } = useAVAX();
  if (currency !== "AVAX" && !AVAX) return "...";

  if (currency === "USD" && !avaxAlways) {
    balance = balance * AVAX.quote.USD.price;
    balance = Round2DecimalPlaces(balance);
  }

  const GetSymbol = () => {
    if (currency === "USD" && !avaxAlways) {
      return <CurrencyDollarIcon className={"inline " + symbolClassNames} />;
    } else {
      return <AvaxSymbol className={symbolClassNames} />;
    }
  };

  return (
    <span className={"flex items-center justify-center " + classNames}>
      {GetSymbol()}
      <span>
        {balance} {avaxAlways ? "AVAX" : currency}
      </span>
    </span>
  );
};

export default CurrencyDisplay;
