import DefaultHandler from "api/DefaultHandler";
import PropertyModel from "api/models/Property";

const ReadProperty = async (req, res) => {
  const { propertyId } = req.query;
  const property = await PropertyModel.get(propertyId);
  res.status(200).send(property);
};

const UpdateProperty = async (req, res) => {
  const newProperty = new PropertyModel(req.body);
  await newProperty.save();
  res.status(200).send(newProperty.toJSON());
};

const methods = {
  GET: {
    auth: false,
    origin: "*",
    function: ReadProperty,
  },
  PUT: {
    auth: "Admin",
    origin: "http://localhost:3001",
    function: UpdateProperty,
  },
};

const handler = (req, res) => DefaultHandler(req, res, methods);
export default handler;
