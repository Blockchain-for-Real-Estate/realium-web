import useUI from "src/context/hooks/useUI";
import { useMutation, useQueryClient } from "react-query";
import { QUERY_KEY as USER_BALANCE } from "../queries/useUserAvaxBalance";
import { QUERY_KEY as PROPERTY_LISTINGS } from "../queries/usePropertyListings";
import axios from "axios";

const BuyListing = async ({ propertyId, listingId }) => {
  const response = axios.post("/api/tx/buy", { propertyId, listingId });
  return response;
};

const useBuyListingMutation = (propertyId, listingId) => {
  const { toast } = useUI();
  const queryClient = useQueryClient();

  return useMutation(() => BuyListing({ propertyId, listingId }), {
    onSuccess: async () => {
      queryClient.invalidateQueries([PROPERTY_LISTINGS, propertyId]);
      setTimeout(() => {
        queryClient.invalidateQueries(USER_BALANCE);
      }, 5000);
      toast(
        "Purchase Order Sent",
        "This transaction can take up to 30 seconds"
      );
    },
    onError: (error) => {
      toast("Purchase Order could not be sent", error.message, "error");
    },
  });
};

export default useBuyListingMutation;
