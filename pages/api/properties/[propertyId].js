const GetProperty = async (req, res) => {
  const { propertyId } = req.query;

  res.status(200).send(`Hello World" ${propertyId}`);
};

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      await GetProperty(req, res);
    default:
      res.status(400).send();
  }
}
