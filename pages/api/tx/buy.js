import AmplifyInit from "amplify.config";
import GetUserWallet from "server/actions/GetUserWallet";
import GetWallet from "server/actions/GetWallet";
import DefaultHandler from "server/DefaultHandler";
import ListingModel from "server/models/ListingModel";

// REQUIRED ON ANY ROUTES WITH AUTH
AmplifyInit();

export const BuyListing = async (req, res, user) => {
  const { propertyId, listingId } = req.body;
  const listing = await ListingModel.get({ propertyId, listingId });

  if (!listing) throw Error("This listing is no longer available");

  const buyerAddress = user.attributes["custom:wallet"];
  const sellerAddress = listing.sellerAddress;

  const buyerWallet = await GetUserWallet(user, true);
  // TODO: ENSURE BUYER HAS ENOUGH AVAX
  const sellerWallet = await GetWallet(sellerAddress, true)[0];
  // TODO: ENSURE SELLER HAS A TOKEN

  // TODO: TRANSACT AVAX FROM userWallet to sellerAddress
  // TODO: TRANSACT TOKEN from sellerWallet to userAddress

  await ListingModel.delete({ propertyId, listingId });
  return res.send(listing);
};

const handlers = {
  POST: {
    auth: true,
    origin: null,
    function: BuyListing,
  },
};

const handler = (req, res) => DefaultHandler(req, res, handlers);
export default handler;
