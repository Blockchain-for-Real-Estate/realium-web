import GetAuthenticatedAccount from "api/helpers/GetAuthenticatedAccount";
import UserModel from "api/models/User";

const GET_user = async (req, res) => {
  const session = await GetAuthenticatedAccount(req, res);

  const user = await UserModel.query("GSI1PK")
    .eq(`USER#${session.user.email}`)
    .using("GSI1")
    .exec();

  return res.status(200).send(user[0]);
};

const UPDATE_user = async (req, res) => {
  const session = await GetAuthenticatedAccount(req, res);
  return res.status(200).send(session);
};

export default async function handler(req, res) {
  try {
    switch (req.method) {
      case "GET":
        await GET_user(req, res);
        // await CREATE_user(req, res);
        break;
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
