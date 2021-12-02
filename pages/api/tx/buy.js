import AmplifyInit from "amplify.config";
import GetUserWallet from "server/actions/GetUserWallet";
import GetWallet from "server/actions/GetWallet";
import DefaultHandler from "server/DefaultHandler";
import ListingModel from "server/models/ListingModel";
import PropertyModel from "server/models/PropertyModel";
import RealiumContractAbi from "server/data/abis/RealiumContractAbi.json";
import GetSignerConnectedSmartContract from "server/actions/GetSignerConnectedSmartContract";
import useAvalanchePrivate from "server/hooks/useAvalanchePrivate"
import { ethers, BigNumber } from "ethers";

// REQUIRED ON ANY ROUTES WITH AUTH
AmplifyInit();

export const BuyListing = async (req, res, user) => {
  const { propertyId, listingId } = req.body;
  const listing = await ListingModel.get({ propertyId, listingId });
  const property = await PropertyModel.get(listing.propertyId)
  //TODO: extract this function because it will probably be reused quite a few times
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

  // TODO: take out later, This will be done on the smart contract in the future
  const avaxBalance = await provider.getBalance(buyerWallet.address);
  if (ethers.utils.formatEther(avaxBalance) < total){
    throw Error;
  }

  // TODO: take out later, This will be done on the smart contract in the future
  const tokenBalanceBigNum = await smartContract.balanceOf(sellerWallet[0].address);
  const tokenBalance = tokenBalanceBigNum.toNumber();
  if (tokenBalance < listing.quantity){
    throw Error;
  }

  const increaseAllowanceResponse = await smartContract.increaseAllowance(buyerWallet.address, listing.quantity);
  smartContract = await GetSignerConnectedSmartContract(sellerWallet[0].privateKey, provider, property);
  const sale = await smartContract.sale(listing.sellerAddress, listing.quantity, listing.price, {value: ethers.utils.parseEther(total.toString()), gasLimit: 2500000 });
  const response = await sale.wait();
  console.log("The sale actually completed")
  console.log(response)

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
