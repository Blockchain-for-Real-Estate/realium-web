import AmplifyInit from "amplify.config";
import DefaultHandler from "server/DefaultHandler";
import OfferModel from "server/models/OfferModel";

// REQUIRED ON ANY ROUTES WITH AUTH
AmplifyInit();

const ReadUserPropertyOffers = async (req, res, user) => {
  const { propertyId } = req.query;
  const userAddress = user.attributes["custom:wallet"];

  const offers = await OfferModel.query({
    buyerAddress: userAddress,
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
    function: ReadUserPropertyOffers,
  },
};

const handler = (req, res) => DefaultHandler(req, res, handlers);
export default handler;
