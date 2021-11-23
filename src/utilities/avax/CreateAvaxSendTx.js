import { ethers } from "ethers";
/**
 * This helper function will create a AvaxSendTx that can be used to get estimates or send avax from a signer
 * @param {String} toAddress the address where you want to send the avax
 * @param {Number} amount the amount you want to send in AVAX (ex. 1)
 * @returns the tx object
 */
const CreateAvaxSendTx = (toAddress, amount) => {
  if (!amount) amount = "0";
  const tx = {
    to: toAddress,
    value: ethers.utils.parseEther(amount),
  };
  return tx;
};

export default CreateAvaxSendTx;
