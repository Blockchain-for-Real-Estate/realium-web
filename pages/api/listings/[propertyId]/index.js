import AmplifyInit from "amplify.config";
import DefaultHandler from "server/DefaultHandler";
import ListingModel from "server/models/Listing";

// REQUIRED ON ANY ROUTES WITH AUTH
AmplifyInit();

const ReadListingsByProperty = (req, res) => {
  const { propertyId } = req.query;
  const listings = ListingModel.query(propertyId).exec();
  return res ? res.send(listings) : listings;
};

const handlers = {
  GET: {
    auth: false,
    origin: "",
    function: ReadListingsByProperty,
  },
};

const handler = (req, res) => DefaultHandler(req, res, handlers);
export default handler;
