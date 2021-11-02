import PropertyModel from "api/models/Property";

const GET_properties = async (req, res) => {
  const { limit } = req.query;
  const response = await PropertyModel.scan().limit(limit).exec();
  res.status(200).send(response);
};

const POST_Property = async (req, res) => {
  const newProperty = await PropertyModel.create(req.body);
  res.status(200).send(newProperty.toJSON());
};

export default async function handler(req, res) {
  try {
    switch (req.method) {
      case "GET":
        await GET_properties(req, res);
      case "POST":
        await POST_Property(req, res)
      default:
        res.status(400).send();
    }
  } catch (error) {
    if (res.statusCode === 200) res.status(500);
    res.send(error.message);
  }
}
