import { useQuery } from "react-query";
import useUser from "./useUser";

export const GetUserTransactions = async () => {
  const transactions = [];
  return transactions;
};

export const QUERY_KEY = "USER_TRANSACTIONS";

export default function useUserTransactions() {
  const { data: user } = useUser();
  return useQuery([QUERY_KEY], () => GetUserTransactions(), {
    enabled: !!user,
  });
}
