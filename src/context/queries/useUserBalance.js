import { useQuery } from "react-query";
import useUser from "./useUser";
import useAVAX from "context/hooks/useAVAX";

export const GetUserBalance = async () => {
  const { XChain } = useAVAX();
  let { balance } = await XChain.getBalance(
    process.env.NEXT_PUBLIC_WALLET,
    "AVAX"
  );
  return balance;
};

export const KEY = "USER_BALANCE";

export default function useUserBalance() {
  const { data: user } = useUser();

  return useQuery([KEY], () => GetUserBalance(), {
    enabled: !!user,
  });
}
