import WalletModel from "server/models/WalletModel";

/**
 * This will get a wallet from the store based on an adreess
 * @param {Object} address the user object from Amplify
 * @param {Boolean} withPrivateKey a boolean that defaults as false. If set to true it will return the private key
 * @returns the wallet
 */
const GetWallet = async (address, withPrivateKey = false) => {
  const wallet = await WalletModel.query({ address })
    .using("addressIndex")
    .exec();
  if (!wallet) return null;
  if (!withPrivateKey) delete wallet.privateKey;
  return wallet;
};

export default GetWallet;
