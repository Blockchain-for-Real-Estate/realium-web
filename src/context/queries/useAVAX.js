import { useQuery } from "react-query";
import axios from "axios";

export const GetAVAX = async () => {
  const { data: AVAX } = await axios.get(`/api/avax`);
  return AVAX;
};

export const QUERY_KEY = "AVAX_PRICE";
export default function useAVAX() {
  return useQuery([QUERY_KEY], GetAVAX, {
    // refetchInterval: 15 * 1000,
  });
}
