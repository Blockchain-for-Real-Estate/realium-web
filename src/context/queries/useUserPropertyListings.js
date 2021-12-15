import { useQuery } from "react-query";
import axios from "axios";
import useUser from "./useUser";

export const GetUserPropertyListings = async ({ propertyId }) => {
  let { data: listings } = await axios.get(`/api/listings/${propertyId}/user`);
  listings = listings?.sort((a, b) => a.price - b.price);
  return listings;
};

export const QUERY_KEY = "USER_PROPERTY_LISTINGS";

export default function useUserPropertyListings(propertyId) {
  const { data: user } = useUser();
  return useQuery(
    [QUERY_KEY, propertyId, user?.attributes.sub],
    () => GetUserPropertyListings({ propertyId }),
    {
      enabled: !!user && !!propertyId,
    }
  );
}
