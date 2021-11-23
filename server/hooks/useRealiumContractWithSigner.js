import { ethers } from "ethers";
import useAvalanchePrivate from "src/server/hooks/useAvalanchePrivate";
import RealiumContractAbi from "src/data/abis/RealiumContractAbi.json";

/**
 * This gets the ethers provider and wallet for a user with their private key
 * @param {*} walletAddress this is wallet address for the user who wishes to use
 * @param {*} smartContractAddress this is the smart contract address the user is to use
 * @returns An object with a provider and a signer to be used server side to interact with the blockchain
 */
const useRealiumContractWithSigner = (walletAddress, smartContractAddress) => {
  //TODO: use walletAddress to get the private and insert into useAvalanchePrivate
  const signer = useAvalanchePrivate(privateKey);
  const smartContract = new ethers.Contract(smartContractAddress, RealiumContractAbi, signer);

  return smartContract;
};

export default useRealiumContractWithSigner;
