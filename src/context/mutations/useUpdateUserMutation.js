import Auth from "@aws-amplify/auth";
import useUI from "src/context/hooks/useUI";
import { useMutation, useQueryClient } from "react-query";
import { QUERY_KEY as USER_KEY } from "../queries/useUser";

const UpdateUser = async ({ user, attributes }) => {
  await Auth.updateUserAttributes(user, attributes);
};

const useUpdateUserMutation = () => {
  const { toast } = useUI();
  const queryClient = useQueryClient();

  return useMutation(UpdateUser, {
    onSuccess: async () => {
      await queryClient.invalidateQueries(USER_KEY);
      toast("Account Updated");
    },
    onError: (error) => {
      alert(error);
    },
  });
};

export default useUpdateUserMutation;
