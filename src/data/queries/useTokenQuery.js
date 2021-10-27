import { useQuery } from "react-query";
import axios from "axios";

export const GetToken = async (tokenId) => {
  const { data: token } = await axios.get(`/api/tokens/${tokenId}`);
  return token;
};

export const QUERY_KEY = "TOKEN";
export default function useTokenQuery(tokenId) {
  return useQuery([QUERY_KEY, tokenId], () => GetToken(tokenId), {
    enabled: !!tokenId,
  });
}