import AmplifyInit from "amplify.config";
import DefaultHandler from "server/DefaultHandler";
import ListingModel from "server/models/ListingModel";

// REQUIRED ON ANY ROUTES WITH AUTH
AmplifyInit();

const ReadUserPropertyListings = async (req, res, user) => {
  const { propertyId } = req.query;
  const userAddress = user.attributes["custom:wallet"];

  const offers = await ListingModel.query({
    sellerAddress: userAddress,
    propertyId,
  })
    .using("addressIndex")
    .exec();

  return res.send(offers);
};

const handlers = {
  GET: {
    auth: true,
    origin: null,
    function: ReadUserPropertyListings,
  },
};

const handler = (req, res) => DefaultHandler(req, res, handlers);
export default handler;
