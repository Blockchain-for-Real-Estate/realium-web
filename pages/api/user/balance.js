import GetAuthenticatedAccount from "api/helpers/GetAuthenticatedAccount";
import GetEthersProvider from "api/helpers/GetEthersProvider";

const GET_userBalance = async (req, res) => {
  const { user } = await GetAuthenticatedAccount(req, res);
  const ETHERS = await GetEthersProvider();

  let { balance } = await ETHERS.send("avm.getBalance", {
    address: user.walletAddress,
    assetID: "AVAX",
  });

  return res.status(200).send(balance.toString());
};

export default async function handler(req, res) {
  try {
    switch (req.method) {
      case "GET":
        await GET_userBalance(req, res);
        break;
      default:
        return res.status(400).send();
    }
  } catch (error) {
    return res.status(500).send(error);
  }
}
