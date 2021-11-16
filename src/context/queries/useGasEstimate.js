import { useQuery } from "react-query";
import axios from "axios";

export const GetGasEstimate = async ({ toAddress, amount }) => {
  const { data: estimate } = await axios.get(`/api/avax`, {
    params: {
      toAddress,
      amount,
    },
  });
  return estimate;
};

export const QUERY_KEY = "GAS_FEE";
export default function useGasEstimate(toAddress, amount, enabled) {
  return useQuery(
    [QUERY_KEY, toAddress, amount],
    () => GetGasEstimate({ toAddress, amount }),
    {
      staleTime: 0,
      enabled: !!toAddress && !!amount && enabled,
    }
  );
}
