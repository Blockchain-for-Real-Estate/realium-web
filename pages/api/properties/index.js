import AmplifyInit from "amplify.config";
import DefaultHandler from "api/DefaultHandler";
import PropertyModel from "api/models/Property";

// REQUIRED ON ANY ROUTES WITH AUTH
AmplifyInit();

export const ReadProperties = async (req, res, user) => {
  const response = await PropertyModel.scan().exec();
  return res?.send(response) || response;
};

const CreateProperty = async (req, res, user) => {
  const response = await PropertyModel.create(req.body);
  return res.send(response);
};

const handlers = {
  GET: {
    auth: false,
    origin: "*",
    function: ReadProperties,
  },
  POST: {
    auth: "Admin",
    origin: "*",
    function: CreateProperty,
  },
};

const handler = (req, res) => DefaultHandler(req, res, handlers);
export default handler;
