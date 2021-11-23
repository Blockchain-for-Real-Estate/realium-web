import { useQuery } from "react-query";
import axios from "axios";

export const GetOffers = async ({ propertyId }) => {
  let { data: offers } = await axios.get(`/api/offers/${propertyId}`);
  offers = offers.sort((a, b) => b.price - a.price);
  return offers;
};

export const QUERY_KEY = "PROPERTY_OFFERS";

export default function usePropertyOffers(propertyId) {
  return useQuery([QUERY_KEY, propertyId], () => GetOffers({ propertyId }), {
    enabled: !!propertyId,
  });
}
