import { ethers } from "ethers";

/**
 * This gets the ethers provider and wallet for a user with their private key
 * @param {*} privateKey this is the privae key for the wallet the user wishes to use
 * @returns An object with a provider and a signer to be used server side to interact with the blockchain
 */
const useAvalanchePrivate = (privateKey) => {
  const provider = new ethers.providers.JsonRpcProvider(
    process.env.NEXT_PUBLIC_AVALANCHE_API_URL
  );

  const signer = privateKey
    ? new ethers.Wallet(privateKey, provider)
    : provider.getSigner();

  return { provider, signer };
};

export default useAvalanchePrivate;
