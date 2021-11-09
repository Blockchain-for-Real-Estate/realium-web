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
 * @param {Object} res this is the response object in the api route handler
 * @param {Object} role this is the role required to pass the get user
 * @returns the current authenticated user and their profile
 */
const getServerSideUser = async (req, res, role) => {
  const Auth = getServerSideAuth(req, res);
  debugger;
  try {
    const user = await Auth.currentAuthenticatedUser();
    const groups =
      user.signInUserSession?.accessToken?.payload?.["cognito:groups"];
    if (role && !groups.includes(role)) throw Error();
    return { ...user, groups };
  } catch (error) {
    res.status(401);
    throw Error("Not Authenticated");
  }
};

export default getServerSideUser;
