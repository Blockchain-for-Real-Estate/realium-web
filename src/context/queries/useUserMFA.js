import { useQuery } from "react-query";
import { Auth } from "aws-amplify";
import useUser from "./useUser";

export const GetUserMFA = async ({ user }) => {
  try {
    const MFA = await Auth.getPreferredMFA(user, { bypassCache: true });
    return MFA;
  } catch (error) {
    return "NOMFA";
  }
};

export const QUERY_KEY = "USER_MFA";

export default function useUserMFA() {
  const { data: user } = useUser();
  return useQuery([QUERY_KEY], () => GetUserMFA({ user }), {
    retry: false,
    enabled: !!user,
  });
}
