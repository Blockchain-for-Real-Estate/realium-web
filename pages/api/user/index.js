import GetAuthenticatedAccount from "api/helpers/GetAuthenticatedAccount";
import UserModel from "api/models/User";

const UPDATE_user = async (req, res) => {
  const session = await GetAuthenticatedAccount(req, res);
  const user = req.body;

  if (user.id !== session.userId)
    throw Error("Not authorized to update this profile");

  const response = await UserModel.update(user);
  return res.status(200).send(response);
};

export default async function handler(req, res) {
  try {
    switch (req.method) {
      case "PUT":
        await UPDATE_user(req, res);
        break;
      default:
        res.status(400).send();
    }
  } catch (error) {
    res.status(500).send(error);
  }
}
