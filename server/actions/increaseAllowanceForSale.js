import { ethers } from "ethers";
import useRealiumContractWithSigner from "src/server/hooks/useRealiumContractWithSigner";

/**
 * This gets the ethers provider and wallet for a user with their private key
 * @param {*} privateKey this is the private key for the wallet the user wishes to use
 * @returns An object with a provider and a signer to be used server side to interact with the blockchain
 */
const increaseAllowanceForSale = (smartContractAddress, listing, buyerAddress) => {
    const smartContract = await useRealiumContractWithSigner(listing.sellerAddress, smartContractAddress);
    const response = await smartContract.increaseAllowance(buyerAddress, listing.count);
    return response;
};

export default increaseAllowanceForSale;
