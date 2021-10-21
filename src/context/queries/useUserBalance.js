import { useQuery } from "react-query";
import axios from "axios";

export const GetUserBalance = async () => {
  const { data: user } = await axios.get(`/api/user/balance`);
  return user;
};

export const QUERY_KEY = "USER_BALANCE";

export default function useUserBalance() {
  return useQuery([QUERY_KEY], () => GetUserBalance(), {
    staleTime: 5 * 60 * 900,
  });
}
