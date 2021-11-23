import AmplifyInit from "amplify.config";
import DefaultHandler from "server/DefaultHandler";
import PropertyModel from "server/models/Property";

// REQUIRED ON ANY ROUTES WITH AUTH
AmplifyInit();

export const ReadOffers = async (req, res, user) => {
  const response = await PropertyModel.scan().exec();
  return res?.send(response) || response;
};

const handlers = {
  GET: {
    auth: "Admin",
    origin: "http://localhost:3001",
    function: ReadOffers,
  },
};

const handler = (req, res) => DefaultHandler(req, res, handlers);
export default handler;
