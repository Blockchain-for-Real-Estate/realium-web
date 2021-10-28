import getServerSideUser, {
  getServerSideAuth,
} from "api/helpers/getServerSideUser";
import WalletModel from "api/models/Wallet";
import useAVAX from "context/hooks/useAVAX";

const CREATE_wallet = async (req, res) => {
  debugger;
  // CHECK USER
  const user = await getServerSideUser(req, res);
  if (user.attributes["custom:wallet"]) throw Error("User already has wallet");

  // CREATE STORED WALLET KEYS
  let wallet = await WalletModel.get(user.sub);
  if (!wallet) {
    wallet = await WalletModel.create({ username: user.sub });
  }

  const { XChain } = useAVAX();
  // CREATE KEYSTORE
  await XChain.keyChain().createUser(wallet.username, wallet.password);
  // CREATE WALLET
  const address = await XChain.createAddress(wallet.username, wallet.password);

  // UPDATE USER
  const Auth = getServerSideAuth();
  await Auth.updateUserAttributes(user, { "custom:wallet": address });
};

export default async function handler(req, res) {
  try {
    switch (req.method) {
      case "POST":
        await CREATE_wallet(req, res);
        break;
      default:
        res.status(400).send();
    }
  } catch (error) {
    if (res.statusCode === 200) res.status(500);
    return res.send(error.message);
  }
}
