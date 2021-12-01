import AmplifyInit from "amplify.config";
import GetUserWallet from "server/actions/GetUserWallet";
import GetWallet from "server/actions/GetWallet";
import DefaultHandler from "server/DefaultHandler";
import ListingModel from "server/models/ListingModel";
import PropertyModel from "server/models/PropertyModel";
import RealiumContractAbi from "server/data/abis/RealiumContractAbi.json";
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
  const wallet = new ethers.Wallet(sellerWallet[0].privateKey)
  let walletSigner = wallet.connect(provider);
  const smartContract = new ethers.Contract(property.smartContractAddress, RealiumContractAbi, walletSigner);

  // TODO: take out, This will be done on the smart contract in the future
  const avaxBalance = await provider.getBalance(buyerWallet.address);
  if (ethers.utils.formatEther(avaxBalance) < total){
    throw Error;
  }

  // TODO: take out, This will be done on the smart contract in the future
  const tokenBalanceBigNum = await smartContract.balanceOf(sellerWallet[0].address);
  const tokenBalance = tokenBalanceBigNum.toNumber();
  if (tokenBalance < listing.quantity){
    throw Error;
  }
  const increaseAllowanceResponse = await smartContract.increaseAllowance(sellerWallet[0].address, listing.quantity);
  const sale = await smartContract.sale(listing.sellerAddress, listing.quantity, listing.price, {value: ethers.utils.parseEther(total.toString())});
  const response = await sale.wait(); //https://ethereum.stackexchange.com/questions/102544/how-to-set-msg-value-from-function
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
