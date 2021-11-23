import AmplifyInit from "amplify.config";
import DefaultHandler from "server/DefaultHandler";
import ListingModel from "server/models/ListingModel";
import PropertyModel from "server/models/PropertyModel";

// REQUIRED ON ANY ROUTES WITH AUTH
AmplifyInit();

export const ReadUserListings = async (req, res, user) => {
  const userAddress = user.attributes["custom:wallet"];

  const listings = await ListingModel.query({ sellerAddress: userAddress })
    .using("addressIndex")
    .exec();

  return res.send(listings);
};

const handlers = {
  GET: {
    auth: true,
    origin: null,
    function: ReadUserListings,
  },
};

const handler = (req, res) => DefaultHandler(req, res, handlers);
export default handler;
