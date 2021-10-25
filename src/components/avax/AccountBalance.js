import useUserBalance from "context/queries/useUserBalance";

const AccountBalance = () => {
  const { data: balance, error } = useUserBalance();
  return <div className="border border-indigo-500">{balance}</div>;
};

export default AccountBalance;
