import ApiTokenService from "data/services/token.service.ts";
import { useQuery } from "react-query";

export const QUERY_KEY = "TOKEN";
export default function useTokenQuery(propertyId) {
  const { getPropertyTokens } = new ApiTokenService();
  return useQuery(
    [QUERY_KEY, propertyId],
    async () => (await getPropertyTokens(propertyId)).data,
    {
      staleTime: 1000,
      enabled: !!propertyId,
    }
  );
}
