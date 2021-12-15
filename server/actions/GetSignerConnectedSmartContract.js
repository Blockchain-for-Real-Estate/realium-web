import WalletModel from "server/models/WalletModel";
import { ethers } from "ethers";
import RealiumContractAbi from "server/data/abis/RealiumContractAbi.json";

/**
 * This will get a wallet from the store based on an adreess
 * @param {String} privateKey the private key of user from Amplify
 * @returns the wallet
 */
const GetSignerConnectedSmartContract = async (privateKey, provider, property) => {
    const wallet = new ethers.Wallet(privateKey)
    let walletSigner = wallet.connect(provider);
    const smartContract = new ethers.Contract(property.smartContractAddress, RealiumContractAbi, walletSigner);
  return smartContract;
};

export default GetSignerConnectedSmartContract;
