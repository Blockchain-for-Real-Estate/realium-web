import { useQuery } from "react-query";
import axios from "axios";

export const GetListings = async ({ propertyId }) => {
  let { data: listings } = await axios.get(`/api/listings/${propertyId}`);
  listings = listings?.sort((a, b) => a.price - b.price);
  return listings;
};

export const QUERY_KEY = "LISTINGS";

export default function useListings(propertyId) {
  return useQuery([QUERY_KEY, propertyId], () => GetListings({ propertyId }), {
    staleTime: 0,
    enabled: !!propertyId,
  });
}
