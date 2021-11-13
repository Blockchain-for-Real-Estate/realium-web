import { useQuery } from "react-query";
import { Auth } from "aws-amplify";
import axios from "axios";

export const GetUser = async () => {
  try {
    let user = await Auth.currentAuthenticatedUser();
    if (!user.attributes["custom:wallet"]) {
      const { data: wallet } = await axios.post("/api/wallet");
      user = await Auth.updateUserAttributes(user, {
        "custom:wallet": wallet.address,
      });
    }
    return user;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const QUERY_KEY = "USER";

export default function useUser() {
  return useQuery([QUERY_KEY], () => GetUser(), {
    staleTime: 5 * 60 * 900,
    retry: false,
  });
}
