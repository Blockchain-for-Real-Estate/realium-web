import AmplifyInit from "amplify.config";
import CreateUserWallet from "server/actions/CreateUserWallet";
import GetUserWallet from "server/actions/GetUserWallet";
import DefaultHandler from "server/DefaultHandler";

// REQUIRED ON ANY ROUTES WITH AUTH
AmplifyInit();

const ReadWallet = async (req, res, user) => {
  const wallet = await GetUserWallet(user);
  return res.send(wallet);
};

const CreateWallet = async (req, res, user) => {
  const wallet = await CreateUserWallet(user);
  return res.send(wallet);
};

const handlers = {
  GET: {
    auth: true,
    origin: "",
    function: ReadWallet,
  },
  POST: {
    auth: true,
    origin: "",
    function: CreateWallet,
  },
};

const handler = (req, res) => DefaultHandler(req, res, handlers);
export default handler;
