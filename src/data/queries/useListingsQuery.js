import { useQuery } from "react-query";
import ApiPropertyService from "../services/property.service.ts";

export const QUERY_KEY = "LISTINGS";
export default function useListingsQuery() {
  const { getAssets } = new ApiPropertyService();
  return useQuery(QUERY_KEY, async () => (await getAssets()).data, {});
}
