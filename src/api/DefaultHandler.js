import getServerSideUser from "./helpers/getServerSideUser";
import NextCors from "nextjs-cors";

/**
 * This is the default handler for all api routes it will apply authentication, and cors, and call the appropriate function based on the req method
 * @param {*} req request object from page route
 * @param {*} res res object from page route
 * @param {*} methods This is an object that contains the different methods with auth role, origins, and a function to call.
 * @returns
 */
const DefaultHandler = async (req, res, methods) => {
  debugger;
  try {
    if (methods[req.method] || req.method === "OPTIONS") {
      const method = methods[req.method];

      await NextCors(req, res, {
        origin: method.origin,
        methods: Object.keys(methods),
      });

      let user = method.auth
        ? await getServerSideUser(req, res, method.auth)
        : null;
      return method.function(req, res, user);
    } else {
      res.status(405);
      throw Error(`${req.method} Not Allowed`);
    }
  } catch (error) {
    if (res.status === 200) res.status(500);
    res.send(error.message);
  }
};

export default DefaultHandler;
