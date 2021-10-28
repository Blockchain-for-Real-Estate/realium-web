import Auth from "@aws-amplify/auth";
import useUI from "context/hooks/useUI";
import { useMutation } from "react-query";

const UpdateUser = async ({ user, attributes }) => {
  await Auth.updateUserAttributes(user, attributes);
};

const useUpdateUserMutation = () => {
  const { toast } = useUI();
  return useMutation(UpdateUser, {
    onSuccess: () => {
      toast("Account Updated");
    },
    onError: (error) => {
      alert(error);
    },
  });
};

export default useUpdateUserMutation;
