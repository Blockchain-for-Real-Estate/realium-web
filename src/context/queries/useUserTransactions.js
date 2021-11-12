import useAVAX from "context/hooks/useAVAX";
import { useQuery } from "react-query";
import useUser from "./useUser";

export const GetUserTransactions = async () => {
  const { XChain } = useAVAX();

  let { transactions } = await XChain.getAddressTxs(
    process.env.NEXT_PUBLIC_WALLET,
    "AVAX"
  );

  return transactions;
};

export const QUERY_KEY = "USER_TRANSACTIONS";

export default function useUserTransactions() {
  const { data: user } = useUser();
  return useQuery([QUERY_KEY], () => GetUserTransactions(), {
    enabled: !!user,
  });
}
