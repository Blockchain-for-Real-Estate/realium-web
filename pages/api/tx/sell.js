import AmplifyInit from "amplify.config";
import GetUserWallet from "server/actions/GetUserWallet";
import GetWallet from "server/actions/GetWallet";
import DefaultHandler from "server/DefaultHandler";
import OfferModel from "server/models/OfferModel";

// REQUIRED ON ANY ROUTES WITH AUTH
AmplifyInit();

export const SellOffer = async (req, res, user) => {
  const { propertyId, offerId } = req.body;
  const offer = await OfferModel.get({ propertyId, offerId });

  if (!offer) throw Error("This offer is no longer available");

  const userAddress = user.attributes["custom:wallet"];
  const buyerAddress = offer.buyerAddress;

  const sellerWallet = await GetUserWallet(user, true);
  // TODO: CHECK TO MAKE SURE SELLER HAS TOKEN;
  const buyerWallet = await GetWallet(buyerAddress, true)[0];
  // TODO: CHECK TO MAKE SURE BUYER HAS SUFFICENT AVAX

  // TODO: TRANSACT AVAX from buyer wallet to sellerWallet
  // TODO: TRANSACT TOKEN FROM sellerWallet to buyer address

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
