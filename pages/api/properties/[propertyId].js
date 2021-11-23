import AmplifyInit from "amplify.config";
import DefaultHandler from "server/DefaultHandler";
import PropertyModel from "server/models/PropertyModel";

// REQUIRED ON ANY ROUTES WITH AUTH
AmplifyInit();

export const ReadProperty = async (req, res) => {
  const { propertyId } = req.query;
  const property = await PropertyModel.get(propertyId);
  return res ? res.send(property) : property;
};

const UpdateProperty = async (req, res) => {
  const newProperty = new PropertyModel(req.body);
  await newProperty.save();
  res.send(newProperty.toJSON());
};

const handlers = {
  GET: {
    auth: false,
    origin: "*",
    function: ReadProperty,
  },
  PUT: {
    auth: false,
    origin: "*",
    function: UpdateProperty,
  },
};

const handler = (req, res) => DefaultHandler(req, res, handlers);
export default handler;
