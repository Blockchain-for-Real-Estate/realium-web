import { withSSRContext } from "aws-amplify";

/**
 * Get's the current signed in user and will send a 401 if the user is not authenticated/found
 * @param {Object} req this is the request object in the api route handler
 * @returns the current authenticated user and their profile
 */
const getServerSideUser = async (req, res) => {
  const { Auth } = withSSRContext({ req });
  try {
    const user = await Auth.currentAuthenticatedUser();
    return user;
  } catch (error) {
    res.status(401);
    throw Error("Not Authenticated");
  }
};

export default getServerSideUser;
