import { useQuery } from "react-query";
import axios from "axios";
import useUser from "./useUser";

export const GetUserOffers = async () => {
  let { data: offers } = await axios.get(`/api/offers`);
  offers = offers?.sort((a, b) => a.price - b.price);
  return offers;
};

export const QUERY_KEY = "USER_OFFERS";

export default function useUserOffers() {
  const { data: user } = useUser();
  return useQuery([QUERY_KEY, user?.attributes.sub], () => GetUserOffers(), {
    enabled: !!user,
  });
}
