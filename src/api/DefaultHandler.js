import getServerSideUser from "./helpers/getServerSideUser";
import NextCors from "nextjs-cors";
import dynamoose from "dynamoose";
/**
 * This is the default handler for all api routes it will apply authentication, and cors, and call the appropriate function based on the req method
 * @param {*} req request object from page route
 * @param {*} res res object from page route
 * @param {*} methods This is an object that contains the different methods with auth role, origins, and a function to call.
 * @returns
 */
const DefaultHandler = async (req, res, handlers) => {
  try {
    dynamoose.aws.sdk.config.update({
      accessKeyId: process.env.ACCESS_KEY,
      secretAccessKey: process.env.ACCESS_SECRET,
      region: process.env.NEXT_PUBLIC_AWS_REGION,
    });

    const method = req.method;
    const handler = handlers[method];

    await NextCors(req, res, {
      origin: handler?.origin || "*",
      methods: Object.keys(handlers),
    });

    if (handler) {
      let user = handler.auth
        ? await getServerSideUser(req, res, handler.auth)
        : null;
      return handler.function(req, res, user);
    } else {
      res.status(405);
      throw Error(`${method} Not Allowed`);
    }
  } catch (error) {
    if (res.status === 200) res.status(500);
    res.send(error.message);
  }
};

export default DefaultHandler;
