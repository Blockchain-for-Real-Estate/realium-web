import { useQuery } from "react-query";
import axios from "axios";

export const GetProperty = async (propertyId) => {
  const { data: property } = await axios.get(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/properties/${propertyId}`
  );
  return property;
};

export const QUERY_KEY = "LISTING";
export default function useListingQuery(propertyId) {
  return useQuery([QUERY_KEY, propertyId], () => GetProperty(propertyId), {
    enabled: !!propertyId,
  });
}
