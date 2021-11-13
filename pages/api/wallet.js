import AmplifyInit from "amplify.config";
import GetUserWallet from "api/actions/GetUserWallet";
import DefaultHandler from "api/DefaultHandler";
import WalletModel from "api/models/Wallet";
import { ethers } from "ethers";

// REQUIRED ON ANY ROUTES WITH AUTH
AmplifyInit();

const ReadWallet = async (req, res, user) => {
  const wallet = await GetUserWallet(user.attributes.sub);
  return res.send(wallet);
};

const CreateWallet = async (req, res, user) => {
  let wallet = await GetUserWallet(user.attributes.sub);
  if (wallet) return res.send(wallet);

  const _wallet = ethers.Wallet.createRandom();
  wallet = WalletModel.create({
    sub: user.attributes.sub,
    address: _wallet.address,
    privateKey: _wallet.privateKey,
  });

  delete wallet.privateKey;

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
