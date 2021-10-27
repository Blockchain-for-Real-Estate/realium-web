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
  try {
    switch (req.method) {
      case "GET":
        await GetProperty(req, res);
        break;
      case "UPDATE":
        await UpdateProperty(req, res);
        break;
      default:
        res.status(400).send();
    }
  } catch (error) {
    if (res.statusCode === 200) res.status(500);
    res.send(error.message);
  }
}
