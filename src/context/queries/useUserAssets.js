import useAVAX from "context/hooks/useAVAX";
import useUser from "./useUser";
import { useQuery } from "react-query";

export const GetUserAssets = async () => {
  const { XChain } = useAVAX();

  let { balances } = await XChain.getAllBalances(
    process.env.NEXT_PUBLIC_WALLET
  );

  return balances;
};

export const QUERY_KEY = "USER_ASSETS";

export default function useUserAssets() {
  const { data: user } = useUser();
  return useQuery([QUERY_KEY], () => GetUserAssets(), {
    enabled: !!user,
  });
}
