import DefaultHandler from "server/DefaultHandler";
import PropertyModel from "server/models/Property";

const ReadModel = async (req, res) => {
  switch (req.query.model) {
    case "property":
      const model = (await PropertyModel.schemaForObject({})).schemaObject;
      return res.send(model);
    default:
      return res.status(404).send("Model Not Found");
  }
};

const handlers = {
  GET: {
    auth: false,
    origin: "*",
    function: ReadModel,
  },
};

const handler = (req, res) => DefaultHandler(req, res, handlers);
export default handler;
