import { useQuery } from "react-query";
import axios from "axios";
import useUser from "./useUser";

export const GetUserListings = async () => {
  let { data: listings } = await axios.get(`/api/listings`);
  listings = listings?.sort((a, b) => a.price - b.price);
  return listings;
};

export const QUERY_KEY = "USER_LISTINGS";

export default function useUserListings() {
  const { data: user } = useUser();
  return useQuery([QUERY_KEY, user?.attributes.sub], () => GetUserListings(), {
    enabled: !!user,
  });
}
