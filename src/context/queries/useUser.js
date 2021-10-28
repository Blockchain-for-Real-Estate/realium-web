import { useQuery } from "react-query";
import { Auth } from "aws-amplify";

export const GetUser = async () => {
  try {
    const user = await Auth.currentAuthenticatedUser();
    return user;
  } catch (error) {
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
