import { useQuery } from "react-query";

export const GetUserTransactions = async () => {
  const { data: user } = await axios.get(`/api/user/transactions`);
  return user;
};

export const QUERY_KEY = "USER_TRANSACTIONS";

export default function useUserTransactions() {
  return useQuery([QUERY_KEY], () => GetUserTransactions(), {
    staleTime: 0,
    refetchInterval: 10 * 1000,
    enabled: !!walletAddress,
  });
}
