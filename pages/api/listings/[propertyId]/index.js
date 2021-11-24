import AmplifyInit from "amplify.config";
import DefaultHandler from "server/DefaultHandler";
import ListingModel from "server/models/ListingModel";

// REQUIRED ON ANY ROUTES WITH AUTH
AmplifyInit();

const ReadListingsByProperty = async (req, res) => {
  const { propertyId } = req.query;
  const listings = await ListingModel.query({ propertyId }).exec();
  return res.send(listings);
};

const CreateListing = async (req, res, user) => {
  const { propertyId } = req.query;
  const userAddress = user.attributes["custom:wallet"];

  const listing = { propertyId, sellerAddress: userAddress, ...req.body };
  const newListing = new ListingModel(listing);
  await newListing.save();
  return res.send(newListing.toJSON());
};

const handlers = {
  GET: {
    auth: false,
    origin: "",
    function: ReadListingsByProperty,
  },
  POST: {
    auth: true,
    origin: "",
    function: CreateListing,
  },
};

const handler = (req, res) => DefaultHandler(req, res, handlers);
export default handler;
