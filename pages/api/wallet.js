import CreateEthAccount from "api/actions/CreateWallet";
import CreateWallet, { ReadWallet } from "api/actions/CreateWallet";
import getServerSideUser, {
  getServerSideAuth,
} from "api/helpers/getServerSideUser";

const CREATE_wallet = async (req, res, user) => {
  if (user.attributes["custom:wallet"]) throw Error("User already has wallet");

  // CREATE ETH ACCOUNT
  // const wallet = await CreateWallet(user.attributes.sub);
  ReadWallet();

  // UPDATE USER
  const Auth = getServerSideAuth();
  await Auth.updateUserAttributes(user, { "custom:wallet": wallet.address });
};

export default async function handler(req, res) {
  try {
    const user = await getServerSideUser(req, res);
    switch (req.method) {
      case "GET":
        await CREATE_wallet(req, res, user);
        break;
      default:
        res.status(400).send();
    }
  } catch (error) {
    if (res.statusCode === 200) res.status(500);
    return res.send(error.message);
  }
}
