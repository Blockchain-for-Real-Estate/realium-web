import GetUserWallet from "./GetUserWallet";
import { ethers } from "ethers";
import WalletModel from "server/models/Wallet";

const CreateUserWallet = async (user) => {
  let wallet = await GetUserWallet(user.attributes.sub);
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
