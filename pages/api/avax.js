import AmplifyInit from "amplify.config";
import CreateAvaxSendTx from "server/actions/CreateAvaxSendTx";
import CreateUserWallet from "server/actions/CreateUserWallet";
import GetUserWallet from "server/actions/GetUserWallet";
import DefaultHandler from "server/DefaultHandler";
import { ethers } from "ethers";
import useAvalanchePublic from "src/context/hooks/useAvalanchePublic";
import useAvalanchePrivate from "server/hooks/useAvalanchePrivate";

// REQUIRED ON ANY ROUTES WITH AUTH
AmplifyInit();

const ReadGasEstimate = async (req, res) => {
  const { toAddress, amount } = req.body;
  const { provider } = useAvalanchePublic();

  const tx = CreateAvaxSendTx(toAddress, amount);
  const gas = await provider.estimateGas(tx);

  return res.send(gas);
};

const SendAvax = async (req, res, user) => {
  const { toAddress, amount } = req.body;

  const wallet = await GetUserWallet(user, true);
  const { signer } = useAvalanchePrivate(wallet.privateKey);

  const _tx = CreateAvaxSendTx(toAddress, amount);
  const tx = await signer.sendTransaction(_tx);

  return res.send(tx);
};

const handlers = {
  GET: {
    auth: true,
    origin: "",
    function: ReadGasEstimate,
  },
  POST: {
    auth: true,
    origin: "",
    function: SendAvax,
  },
};

const handler = (req, res) => DefaultHandler(req, res, handlers);
export default handler;
