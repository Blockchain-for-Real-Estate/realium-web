import AmplifyInit from "amplify.config";
import GetUserWallet from "server/actions/GetUserWallet";
import GetWallet from "server/actions/GetWallet";
import DefaultHandler from "server/DefaultHandler";
import OfferModel from "server/models/OfferModel";
import PropertyModel from "server/models/PropertyModel";
import GetSignerConnectedSmartContract from "server/actions/GetSignerConnectedSmartContract";
import { ethers, BigNumber } from "ethers";


// REQUIRED ON ANY ROUTES WITH AUTH
AmplifyInit();

export const SellOffer = async (req, res, user) => {
  const { propertyId, offerId } = req.body;
  const offer = await OfferModel.get({ propertyId, offerId });
  const property = await PropertyModel.get(offer.propertyId)
  const provider = new ethers.providers.JsonRpcProvider(
    process.env.NEXT_PUBLIC_AVALANCHE_API_URL
  );
  const total = offer?.quantity * offer?.price;

  if (!offer) throw Error("This offer is no longer available");

  const userAddress = user.attributes["custom:wallet"];
  const buyerAddress = offer.buyerAddress;

  const sellerWallet = await GetUserWallet(user, true);
  const buyerWallet = await GetWallet(buyerAddress, true);

  //Connect wallet to provider
  let smartContract = await GetSignerConnectedSmartContract(sellerWallet.privateKey, provider, property);

  // CHECK TO MAKE SURE BUYER HAS SUFFICENT AVAX
  const avaxBalance = await provider.getBalance(buyerWallet[0].address);
  if (ethers.utils.formatEther(avaxBalance) < total){
    throw Error;
  }

  // CHECK TO MAKE SURE SELLER HAS TOKEN;
  const tokenBalanceBigNum = await smartContract.balanceOf(sellerWallet.address);
  const tokenBalance = tokenBalanceBigNum.toNumber();
  if (tokenBalance < offer.quantity){
    throw Error;
  }

  console.log("increase")
  // TRANSACT AVAX from buyer wallet to sellerWallet and TRANSACT TOKEN FROM sellerWallet to buyer address
  const increaseAllowanceResponse = await smartContract.increaseAllowance(buyerWallet[0].address, offer.quantity);
  smartContract = await GetSignerConnectedSmartContract(buyerWallet[0].privateKey, provider, property);
  const sale = await smartContract.sale(sellerWallet.address, offer.quantity, offer.price, {value: ethers.utils.parseEther(total.toString())});
  const response = await sale.wait();

  await OfferModel.delete({ propertyId, offerId });
  return res.send(offer);
};

const handlers = {
  POST: {
    auth: true,
    origin: null,
    function: SellOffer,
  },
};

const handler = (req, res) => DefaultHandler(req, res, handlers);
export default handler;
