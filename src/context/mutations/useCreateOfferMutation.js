import Auth from "@aws-amplify/auth";
import useUI from "src/context/hooks/useUI";
import { useMutation, useQueryClient } from "react-query";
import { QUERY_KEY as OFFERS } from "../queries/usePropertyOffers";
import axios from "axios";

const CreateOffer = async ({ propertyId, price, quantity }) => {
  const response = axios.post(`/api/offers/${propertyId}`, { price, quantity });
  return response;
};

const useCreateOfferMutation = (propertyId) => {
  const { toast } = useUI();
  const queryClient = useQueryClient();

  return useMutation(
    ({ price, quantity }) => CreateOffer({ propertyId, price, quantity }),
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries(OFFERS);
        toast(
          "Offer Sent",
          "This offer is now live. AVAX will be deducted from your account"
        );
      },
      onError: (error) => {
        toast("Offer could Not Be Sent", error.message, "error");
      },
    }
  );
};

export default useCreateOfferMutation;
