import PropertyModel from "api/models/Property";

const GetProperty = async (req, res) => {
  const { propertyId } = req.query;
  const property = await PropertyModel.get(propertyId);
  res.status(200).send(property);
};

const UpdateProperty = async (req, res) => {
  const newProperty = new PropertyModel(req.body);
  await newProperty.save();
  res.status(200).send(newProperty.toJSON());
};

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      await GetProperty(req, res);
    case "UPDATE":
      await UpdateProperty(req, res);
    default:
      res.status(400).send();
  }
}
