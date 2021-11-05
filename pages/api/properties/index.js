import DefaultHandler from "api/DefaultHandler";
import PropertyModel from "api/models/Property";

const ReadProperties = async (req, res, user) => {
  const { limit } = req.query;
  const response = await PropertyModel.scan().limit(limit).exec();
  res.status(200).send(response);
};

const CreateProperty = async (req, res, user) => {
  const response = await PropertyModel.create(req.body);
  res.status(200).send(response);
};

const methods = {
  GET: {
    auth: false,
    origin: "*",
    function: ReadProperties,
  },
  POST: {
    auth: "Admin",
    origin: "localhost:3001",
    function: CreateProperty,
  },
};

const handler = (req, res) => DefaultHandler(req, res, methods);
export default handler;
