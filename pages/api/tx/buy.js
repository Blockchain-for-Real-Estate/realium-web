import AmplifyInit from "amplify.config";
import GetUserWallet from "server/actions/GetUserWallet";
import GetWallet from "server/actions/GetWallet";
import DefaultHandler from "server/DefaultHandler";
import ListingModel from "server/models/ListingModel";
import PropertyModel from "server/models/PropertyModel";
import GetSignerConnectedSmartContract from "server/actions/GetSignerConnectedSmartContract";
import { ethers, BigNumber } from "ethers";

// REQUIRED ON ANY ROUTES WITH AUTH
AmplifyInit();

export const BuyListing = async (req, res, user) => {
  const { propertyId, listingId } = req.body;
  const listing = await ListingModel.get({ propertyId, listingId });
  const property = await PropertyModel.get(listing.propertyId)
  const provider = new ethers.providers.JsonRpcProvider(
    process.env.NEXT_PUBLIC_AVALANCHE_API_URL
  );
  const total = listing?.quantity * listing?.price;

  if (!listing) throw Error("This listing is no longer available");

  const buyerAddress = user.attributes["custom:wallet"];
  const sellerAddress = listing.sellerAddress;

  //Get wallets and private keys
  const buyerWallet = await GetUserWallet(user, true);
  const sellerWallet = await GetWallet(sellerAddress, true);

  //Connect wallet to provider
  let smartContract = await GetSignerConnectedSmartContract(sellerWallet[0].privateKey, provider, property);

  const increaseAllowanceResponse = await smartContract.increaseAllowance(buyerWallet.address, listing.quantity);
  smartContract = await GetSignerConnectedSmartContract(buyerWallet.privateKey, provider, property);
  const sale = await smartContract.sale(listing.sellerAddress, listing.quantity, ethers.utils.parseEther(listing.price.toString()), { value: ethers.utils.parseEther(total.toString()), gasLimit: 8000000 });
  const response = await sale.wait();

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
