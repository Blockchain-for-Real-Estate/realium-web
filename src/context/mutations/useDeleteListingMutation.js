import useUI from "src/context/hooks/useUI";
import { useMutation, useQueryClient } from "react-query";
import { QUERY_KEY as PROPERTY_LISTINGS } from "../queries/usePropertyListings";
import { QUERY_KEY as USER_PROPERTY_LISTINGS } from "../queries/useUserPropertyListings";
import { QUERY_KEY as USER_LISTINGS } from "../queries/useUserListings";
import axios from "axios";

const DeleteListing = async ({ propertyId, listingId }) => {
  const response = await axios.delete(
    `/api/listings/${propertyId}/${listingId}`
  );
  return response;
};

const useDeleteListingMutation = (propertyId, listingId) => {
  const { toast } = useUI();
  const queryClient = useQueryClient();

  return useMutation(() => DeleteListing({ propertyId, listingId }), {
    onSuccess: async () => {
      await queryClient.invalidateQueries(PROPERTY_LISTINGS);
      await queryClient.invalidateQueries(USER_LISTINGS);
      await queryClient.invalidateQueries(USER_PROPERTY_LISTINGS);
      toast(
        "Listing Removed",
        "This listing is now removed. Your token will be returned to your account"
      );
    },
    onError: (error) => {
      toast("Listing could not be removed", error.message, "error");
    },
  });
};

export default useDeleteListingMutation;
