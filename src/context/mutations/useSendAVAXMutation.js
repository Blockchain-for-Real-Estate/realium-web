import Auth from "@aws-amplify/auth";
import useUI from "src/context/hooks/useUI";
import { useMutation, useQueryClient } from "react-query";
import { QUERY_KEY as USER_BALANCE } from "../queries/useUserAvaxBalance";
import axios from "axios";

const SendAVAX = async ({ toAddress, amount }) => {
  const response = axios.post("/api/avax", { toAddress, amount });
  return response;
};

const useSendAVAXMutation = () => {
  const { toast } = useUI();
  const queryClient = useQueryClient();

  return useMutation(SendAVAX, {
    onSuccess: async () => {
      setTimeout(() => {
        queryClient.invalidateQueries(USER_BALANCE);
      }, 5000);
      toast("AVAX Sent", "This transaction can take up to 30 seconds");
    },
    onError: (error) => {
      toast("AVAX Could Not Be Sent", error.message, "error");
    },
  });
};

export default useSendAVAXMutation;
