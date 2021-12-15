import AmplifyInit from "amplify.config";
import DefaultHandler from "server/DefaultHandler";
import useCovalentTransactions from "server/hooks/useCovalentTransaction";
import GetUserWallet from "server/actions/GetUserWallet";

// REQUIRED ON ANY ROUTES WITH AUTH
AmplifyInit();

const GetTransactions = async (req, res, user) => {
    const wallet = await GetUserWallet(user, false);
    const TRANSACTIONS = useCovalentTransactions();
    const { data: transactions } = await TRANSACTIONS.get(
      `/v1/43113/address/${wallet.address}/transactions_v2/?quote-currency=USD&format=JSON&block-signed-at-asc=false&no-logs=false&key=${process.env.COVALENT_API_KEY}`
    );
    let txns = transactions?.data.items;
    return res.send(txns);
  };

  const handlers = {
    GET: {
      auth: true,
      origin: "",
      function: GetTransactions,
    }
  };

const handler = (req, res) => DefaultHandler(req, res, handlers);
export default handler;