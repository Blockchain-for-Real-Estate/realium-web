import WalletModel from "server/models/Wallet";

const GetUserWallet = async (sub, withPrivateKey = false) => {
  const wallet = await WalletModel.get(sub);
  if (!wallet) return null;
  if (!withPrivateKey) delete wallet.privateKey;
  return wallet;
};

export default GetUserWallet;
