import AmplifyInit from "amplify.config";
import DefaultHandler from "api/DefaultHandler";
import PropertyModel from "api/models/Property";

// REQUIRED ON ANY ROUTES WITH AUTH
AmplifyInit();

const ReadProperties = async (req, res, user) => {
  const { limit } = req.query;
  const response = await PropertyModel.scan().limit(limit).exec();
  res.send(response);
};

const CreateProperty = async (req, res, user) => {
  const response = await PropertyModel.create(req.body);
  res.send(response);
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
