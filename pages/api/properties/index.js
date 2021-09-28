const GetProperties = (req, res) => {
  res.status(200).send("Hello World");
};

export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      GetProperties(req, res);
    default:
      res.status(400).send();
  }
}
