import useUI from "src/context/hooks/useUI";
import { useMutation, useQueryClient } from "react-query";
import { QUERY_KEY as PROPERTY_OFFERS } from "../queries/usePropertyOffers";
import { QUERY_KEY as USER_PROPERTY_OFFERS } from "../queries/useUserPropertyOffers";
import { QUERY_KEY as USER_OFFERS } from "../queries/useUserOffers";
import axios from "axios";

const DeleteOffer = async ({ propertyId, offerId }) => {
  const response = axios.delete(`/api/offers/${propertyId}/${offerId}`);
  return response;
};

const useDeleteOfferMutation = (propertyId, offerId) => {
  const { toast } = useUI();
  const queryClient = useQueryClient();

  return useMutation(() => DeleteOffer({ propertyId, offerId }), {
    onSuccess: async () => {
      await queryClient.invalidateQueries(PROPERTY_OFFERS);
      await queryClient.invalidateQueries(USER_PROPERTY_OFFERS);
      await queryClient.invalidateQueries(USER_OFFERS);
      toast(
        "Offer Rescinded",
        "This offer is now removed. AVAX will be returned to your account"
      );
    },
    onError: (error) => {
      toast("Offer could not be removed", error.message, "error");
    },
  });
};

export default useDeleteOfferMutation;
