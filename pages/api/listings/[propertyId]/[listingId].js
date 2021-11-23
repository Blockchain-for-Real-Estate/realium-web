import AmplifyInit from "amplify.config";
import DefaultHandler from "server/DefaultHandler";
import ListingModel from "server/models/ListingModel";

// REQUIRED ON ANY ROUTES WITH AUTH
AmplifyInit();

const ReadListing = async (req, res) => {
  const { propertyId, listingId } = req.query;
  const listing = await ListingModel.get({ propertyId, listingId });
  if (!listing) res.status(400);
  return res ? res.send(listing) : listing;
};

const DeleteListing = async (req, res, user) => {
  const { propertyId } = req.query;
  const sellerAddress = user.attributes["custom:wallet"];

  await ListingModel.delete({ propertyId, sellerAddress });
  return res.send();
};

const handlers = {
  GET: {
    auth: false,
    origin: "",
    function: ReadListing,
  },

  DELETE: {
    auth: true,
    origin: "",
    function: DeleteListing,
  },
};

const handler = (req, res) => DefaultHandler(req, res, handlers);
export default handler;
