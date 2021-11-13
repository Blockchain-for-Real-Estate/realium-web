import { withSSRContext } from "aws-amplify";

/**
 * Get the Amplify Server side auth class
 * @param {*} req from api route
 * @param {*} res from api route
 * @returns Auth Class from amplify
 */
const useServerSideAuth = (req, res) => {
  const { Auth } = withSSRContext({ req });
  return Auth;
};

export default useServerSideAuth;
