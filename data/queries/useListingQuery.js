import { data } from "autoprefixer";
import { useQuery } from "react-query";
import ApiPropertyService from "../services/property.service.ts";

export const QUERY_KEY = "LISTING";
export default function useListingQuery(propertyId) {
  const { getAssetById } = new ApiPropertyService();

  return useQuery(
    [QUERY_KEY, propertyId],
    async () => (await getAssetById(propertyId)).data[0],
    {
      enabled: !!propertyId,
    }
  );
}
