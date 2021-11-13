import { useQuery } from "react-query";
import useUser from "./useUser";
import useAvalanchePublic from "../hooks/useAvalanchePublic";
import { ethers } from "ethers";

export const GetUserAvaxBalance = async ({ address }) => {
  const { provider } = useAvalanchePublic();
  let balance = await provider.getBalance(address);
  balance = ethers.utils.formatEther(balance);
  return balance;
};

export const QUERY_KEY = "USER_AVAX_BALANCE";

export default function useUserAvaxBalance() {
  const { data: user } = useUser();

  return useQuery(
    [QUERY_KEY],
    () => GetUserAvaxBalance({ address: user.attributes["custom:wallet"] }),
    {
      staleTime: 10 * 1000,
      enabled: !!user,
    }
  );
}
