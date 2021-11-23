import AmplifyInit from "amplify.config";
import DefaultHandler from "server/DefaultHandler";
import ListingModel from "server/models/Listing";

// REQUIRED ON ANY ROUTES WITH AUTH
AmplifyInit();

const ReadOffer = async (req, res) => {
  const { propertyId, sellerAddress } = req.query;
  const listing = await ListingModel.get({ propertyId, sellerAddress });
  if (!listing) res.status(400);
  return res ? res.send(listing) : listing;
};

const CreateOffer = async (req, res, user) => {
  const { propertyId } = req.query;
  const sellerAddress = user.attributes["custom:wallet"];

  const listing = { propertyId, sellerAddress, ...req.body };
  const newListing = new ListingModel(listing);
  await newListing.save();
  return res.send(newListing.toJSON());
};

const DeleteOffer = async (req, res, user) => {
  const { propertyId } = req.query;
  const sellerAddress = user.attributes["custom:wallet"];

  await ListingModel.delete({ propertyId, sellerAddress });
  return res.send();
};

const handlers = {
  GET: {
    auth: false,
    origin: "",
    function: ReadOffer,
  },
  POST: {
    auth: true,
    origin: "",
    function: CreateOffer,
  },
  DELETE: {
    auth: true,
    origin: "",
    function: DeleteOffer,
  },
};

const handler = (req, res) => DefaultHandler(req, res, handlers);
export default handler;
