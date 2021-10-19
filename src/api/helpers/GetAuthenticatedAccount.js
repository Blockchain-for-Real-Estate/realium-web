import { getSession } from "next-auth/client";

const GetAuthenticatedAccount = async (req, res) => {
  const session = await getSession({ req });
  if (!session) throw Error("Not Authenticated");
  return session;
};

export default GetAuthenticatedAccount;
