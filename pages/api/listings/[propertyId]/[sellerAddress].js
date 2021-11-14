import AmplifyInit from "amplify.config";
import DefaultHandler from "server/DefaultHandler";
import ListingModel from "server/models/Listing";

// REQUIRED ON ANY ROUTES WITH AUTH
AmplifyInit();

const ReadListing = async (req, res) => {
  const { propertyId, sellerAddress } = req.query;
  const listing = await ListingModel.get({ propertyId, sellerAddress });
  if (!listing) res.status(400);
  return res ? res.send(listing) : listing;
};

const CreateListing = async (req, res, user) => {
  const { propertyId, sellerAddress } = req.query;
  const userAddress = user.attributes["custom:wallet"];

  if (sellerAddress !== userAddress)
    throw Error("Cannot create listing for other wallets");

  const listing = { propertyId, sellerAddress, ...req.body };
  const newListing = new ListingModel(listing);
  await newListing.save();
  return res.send(newListing.toJSON());
};

const DeleteListing = async (req, res, user) => {
  const { propertyId, sellerAddress } = req.query;
  const userAddress = user.attributes["custom:wallet"];

  if (sellerAddress !== userAddress)
    throw Error("Cannot delete other users listing");

  await ListingModel.delete({ propertyId, sellerAddress });
  return res.send();
};

const handlers = {
  GET: {
    auth: false,
    origin: "",
    function: ReadListing,
  },
  POST: {
    auth: true,
    origin: "",
    function: CreateListing,
  },
  DELETE: {
    auth: true,
    origin: "",
    function: DeleteListing,
  },
};

const handler = (req, res) => DefaultHandler(req, res, handlers);
export default handler;
