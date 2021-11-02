import { withSSRContext } from "aws-amplify";
import initialize from "../../../amplify";

/**
 * Get the Amplify Server side auth class
 * @param {*} req from api route
 * @param {*} res from api route
 * @returns Auth Class from amplify
 */
export const getServerSideAuth = (req, res) => {
  initialize();
  const { Auth } = withSSRContext({ req });
  return Auth;
};

/**
 * Get's the current signed in user and will send a 401 if the user is not authenticated/found
 * @param {Object} req this is the request object in the api route handler
 * @returns the current authenticated user and their profile
 */
const getServerSideUser = async (req, res) => {
  const Auth = getServerSideAuth(req, res);
  try {
    const user = await Auth.currentAuthenticatedUser();
    return user;
  } catch (error) {
    debugger;
    res.status(401);
    throw Error("Not Authenticated");
  }
};

export default getServerSideUser;
