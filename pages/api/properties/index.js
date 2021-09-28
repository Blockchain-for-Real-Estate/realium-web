import PropertyModel from "api/models/Property";

const GetProperties = async (req, res) => {
  const { limit } = req.query;
  const response = await PropertyModel.scan().limit(limit).exec();
  res.status(200).send(response);
};

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      await GetProperties(req, res);
    default:
      res.status(400).send();
  }
}
