import WalletModel from "server/models/Wallet";

/**
 * This will get the user wallet for the current user
 * @param {Object} user the user object from Amplify
 * @param {Boolean} withPrivateKey a boolean that defaults as false. If set to true it will return the private key
 * @returns the users wallet
 */
const GetUserWallet = async (user, withPrivateKey = false) => {
  const wallet = await WalletModel.get(user.attributes.sub);
  if (!wallet) return null;
  if (!withPrivateKey) delete wallet.privateKey;
  return wallet;
};

export default GetUserWallet;
