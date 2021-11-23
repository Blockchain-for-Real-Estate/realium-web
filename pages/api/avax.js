import AmplifyInit from "amplify.config";
import CreateAvaxSendTx from "src/utilities/avax/CreateAvaxSendTx";
import GetUserWallet from "server/actions/GetUserWallet";
import DefaultHandler from "server/DefaultHandler";
import useAvalanchePrivate from "server/hooks/useAvalanchePrivate";
import useCoinMarketCap from "server/hooks/useCoinMarketCap";

// REQUIRED ON ANY ROUTES WITH AUTH
AmplifyInit();

const GetAVAXPrice = async (req, res, user) => {
  const COIN_MARKET_CAP = useCoinMarketCap();
  const { data: quotes } = await COIN_MARKET_CAP.get(
    "/cryptocurrency/quotes/latest",
    {
      params: {
        id: "5805", // AVAX
        convert: "USD",
      },
    }
  );
  let AVAX = quotes?.data[5805];
  return res.send(AVAX);
};

const SendAVAX = async (req, res, user) => {
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
    function: GetAVAXPrice,
  },
  POST: {
    auth: true,
    origin: "",
    function: SendAVAX,
  },
};

const handler = (req, res) => DefaultHandler(req, res, handlers);
export default handler;
