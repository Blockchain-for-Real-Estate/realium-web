import useUser from "./useUser";
import { useQuery } from "react-query";
import useAvalanchePublic from "../hooks/useAvalanchePublic";

export const GetUserAssets = async ({ user }) => {
  // const { provider } = useAvalanchePublic();
  const balance = 10;
  // const balance = await provider.getBalance(user.walletAdress);
  return balance;
};

export const QUERY_KEY = "USER_ASSETS";

export default function useUserAssets() {
  const { data: user } = useUser();
  return useQuery([QUERY_KEY], () => GetUserAssets({ user }), {
    enabled: !!user,
  });
}
