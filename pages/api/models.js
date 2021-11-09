import DefaultHandler from "api/DefaultHandler";
import PropertyModel from "api/models/Property";

const ReadModel = async (req, res) => {
  switch (req.query.model) {
    case "property":
      const model = (await PropertyModel.schemaForObject({})).schemaObject;
      return res.send(model);
    default:
      return res.status(404).send("Model Not Found");
  }
};

const methods = {
  GET: {
    auth: false,
    origin: "*",
    function: ReadModel,
  },
};

const handler = (req, res) => DefaultHandler(req, res, methods);
export default handler;
