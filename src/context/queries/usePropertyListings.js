import { useQuery } from "react-query";
import axios from "axios";

export const GetListings = async ({ propertyId }) => {
  let { data: listings } = await axios.get(`/api/listings/${propertyId}`);
  listings = listings?.sort((a, b) => a.price - b.price);
  return listings;
};

export const QUERY_KEY = "PROPERTY_LISTINGS";

export default function usePropertyListings(propertyId) {
  return useQuery([QUERY_KEY, propertyId], () => GetListings({ propertyId }), {
    staleTime: 0,
    enabled: !!propertyId,
  });
}
