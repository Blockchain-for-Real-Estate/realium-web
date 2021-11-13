import useServerSideAuth from "./useServerSideAuth";

/**
 * Get's the current signed in user and will send a 401 if the user is not authenticated/found
 * @param {Object} req this is the request object in the api route handler
 * @param {Object} res this is the response object in the api route handler
 * @param {Object} role this is the role required to pass the get user
 * @returns the current authenticated user and their profile
 */
const useServerSideUser = async (req, res, role) => {
  const Auth = useServerSideAuth(req, res);
  try {
    const user = await Auth.currentAuthenticatedUser();
    const groups =
      user.signInUserSession?.accessToken?.payload?.["cognito:groups"];
    if (role) {
      if (!user) throw Error("User not authenticated");
      if (typeof role === "string" && !groups.includes(role))
        throw Error("Missing assigned role");
    }
    return { ...user, groups };
  } catch (error) {
    res.status(401);
    throw error;
  }
};

export default useServerSideUser;
