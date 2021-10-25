import { useQuery } from "react-query";
import useUser from "./useUser";
import useAVAX from "context/hooks/useAVAX";

export const GetUserBalance = async () => {
  const { XChain } = useAVAX();
  let res = await XChain.getAllBalances(process.env.NEXT_PUBLIC_WALLET, "AVAX");
  return res;
};

export const QUERY_KEY = "USER_BALANCE";

export default function useUserBalance() {
  const { data: user } = useUser();

  return useQuery([QUERY_KEY], () => GetUserBalance(), {
    enabled: !!user,
  });
}
