import AmplifyInit from "amplify.config";
import DefaultHandler from "server/DefaultHandler";
import ListingModel from "server/models/Listing";

// REQUIRED ON ANY ROUTES WITH AUTH
AmplifyInit();

const ReadOffersByProperty = async (req, res) => {
  const { propertyId } = req.query;
  const listings = await ListingModel.query({ propertyId }).exec();
  return res ? res.send(listings) : listings;
};

const handlers = {
  GET: {
    auth: false,
    origin: "",
    function: ReadOffersByProperty,
  },
};

const handler = (req, res) => DefaultHandler(req, res, handlers);
export default handler;
