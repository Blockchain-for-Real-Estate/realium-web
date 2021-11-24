import useUI from "src/context/hooks/useUI";
import { useMutation, useQueryClient } from "react-query";
import { QUERY_KEY as USER_BALANCE } from "../queries/useUserAvaxBalance";
import { QUERY_KEY as PROPERTY_OFFERS } from "../queries/usePropertyOffers";
import axios from "axios";

const SellOffer = async ({ propertyId, offerId }) => {
  const response = axios.post("/api/tx/sell", { propertyId, offerId });
  return response;
};

const useSellOfferMutation = (propertyId, offerId) => {
  const { toast } = useUI();
  const queryClient = useQueryClient();

  return useMutation(() => SellOffer({ propertyId, offerId }), {
    onSuccess: async () => {
      queryClient.invalidateQueries([PROPERTY_OFFERS, propertyId]);
      setTimeout(() => {
        queryClient.invalidateQueries(USER_BALANCE);
      }, 5000);
      toast("Sell Order Sent", "This transaction can take up to 30 seconds");
    },
    onError: (error) => {
      toast("Sell Order could not be sent", error.message, "error");
    },
  });
};

export default useSellOfferMutation;
