import { useQuery } from "react-query";
import axios from "axios";

export const GetListings = async ({ propertyId }) => {
  const { data: listings } = await axios.get(`/api/listings/${propertyId}`);
  return listings;
};

export const QUERY_KEY = "LISTINGS";

export default function useListings(propertyId) {
  return useQuery([QUERY_KEY, propertyId], () => GetListings({ propertyId }), {
    staleTime: 0,
    enabled: !!propertyId,
  });
}
