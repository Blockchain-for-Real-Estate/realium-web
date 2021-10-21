import GetAuthenticatedAccount from "api/helpers/GetAuthenticatedAccount";
import GetEthersProvider from "api/helpers/GetEthersProvider";

const GET_userTransactions = async (req, res) => {
  const { user } = await GetAuthenticatedAccount(req, res);
  const ETHERS = await GetEthersProvider();

  let { transactions } = await ETHERS.send("avm.getAddressTxs", {
    address: user.walletAddress,
    assetID: "AVAX",
  });

  return res.status(200).send(transactions);
};

export default async function handler(req, res) {
  try {
    switch (req.method) {
      case "GET":
        await GET_userTransactions(req, res);
        break;
      default:
        return res.status(400).send();
    }
  } catch (error) {
    return res.status(500).send(error);
  }
}
