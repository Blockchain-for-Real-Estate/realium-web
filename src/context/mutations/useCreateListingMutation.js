import Auth from "@aws-amplify/auth";
import useUI from "src/context/hooks/useUI";
import { useMutation, useQueryClient } from "react-query";
import { QUERY_KEY as LISTINGS } from "../queries/usePropertyListings";
import axios from "axios";

const CreateListing = async ({ propertyId, price, quantity }) => {
  const response = axios.post(`/api/listings/${propertyId}`, {
    price,
    quantity,
  });
  return response;
};

const useCreateListingMutation = (propertyId) => {
  const { toast } = useUI();
  const queryClient = useQueryClient();

  return useMutation(
    ({ price, quantity }) => CreateListing({ propertyId, price, quantity }),
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries(LISTINGS);
        toast(
          "Listing Submitted",
          "This listing is now live. Your token will be deducted from your account"
        );
      },
      onError: (error) => {
        toast("Listing could not be submitted", error.message, "error");
      },
    }
  );
};

export default useCreateListingMutation;
