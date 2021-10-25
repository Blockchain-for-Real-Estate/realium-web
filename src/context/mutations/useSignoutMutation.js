import Auth from "@aws-amplify/auth";
import useUI from "context/hooks/useUI";
import { useRouter } from "next/router";
import { useMutation, useQueryClient } from "react-query";

const useSignoutMutation = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { toast } = useUI();

  return useMutation(async () => await Auth.signOut(), {
    onSuccess: async () => {
      queryClient.clear();
      toast("Signed out");
      await router.push("/");
    },
    onError: (error) => {
      toast("Could not sign out", error.message, "error");
    },
  });
};

export default useSignoutMutation;
