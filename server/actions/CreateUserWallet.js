import GetUserWallet from "./GetUserWallet";
import { ethers } from "ethers";
import WalletModel from "server/models/WalletModel";

/**
 * This action will check if the current user has a wallet, then either return it or create a new one for them
 * @param {*} user the user object from amplify
 * @returns returns the wallet without the private key
 */
const CreateUserWallet = async (user) => {
  let wallet = await GetUserWallet(user);
  if (wallet) return wallet;

  const _wallet = ethers.Wallet.createRandom();
  wallet = await WalletModel.create({
    sub: user.attributes.sub,
    address: _wallet.address,
    privateKey: _wallet.privateKey,
  });
  delete wallet.privateKey;

  return wallet;
};

export default CreateUserWallet;
