import { useQuery } from "react-query";
import axios from "axios";
import useUser from "./useUser";

export const GetUserPropertyOffers = async ({ propertyId }) => {
  let { data: offers } = await axios.get(`/api/offers/${propertyId}/user`);
  offers = offers?.sort((a, b) => b.price - a.price);
  return offers;
};

export const QUERY_KEY = "USER_PROPERTY_OFFERS";

export default function useUserPropertyOffers(propertyId) {
  const { data: user } = useUser();
  return useQuery(
    [QUERY_KEY, propertyId, user?.attributes.sub],
    () => GetUserPropertyOffers({ propertyId }),
    {
      enabled: !!user && !!propertyId,
    }
  );
}
