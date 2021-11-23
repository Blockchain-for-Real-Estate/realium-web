import AmplifyInit from "amplify.config";
import DefaultHandler from "server/DefaultHandler";
import OfferModel from "server/models/OfferModel";
import PropertyModel from "server/models/PropertyModel";

// REQUIRED ON ANY ROUTES WITH AUTH
AmplifyInit();

export const ReadUserOffers = async (req, res, user) => {
  const userAddress = user.attributes["custom:wallet"];

  const offers = await OfferModel.query({ buyerAddress: userAddress })
    .using("addressIndex")
    .exec();

  return res.send(offers);
};

const handlers = {
  GET: {
    auth: true,
    origin: null,
    function: ReadUserOffers,
  },
};

const handler = (req, res) => DefaultHandler(req, res, handlers);
export default handler;
