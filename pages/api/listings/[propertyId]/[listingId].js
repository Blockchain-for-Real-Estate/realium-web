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
  const { propertyId, listingId } = req.query;
  const userAddress = user.attributes["custom:wallet"];

  const listing = await ListingModel.get({ propertyId, listingId });

  if (listing.sellerAddress !== userAddress) {
    res.status(401);
    throw Error("Not Authorized");
  }

  // TODO: RETURN THE TOEKN FROM THIS LISTING BACK TO THE USER ADDRESS
  listing.delete();
  return res.send(listing.toJSON());
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
