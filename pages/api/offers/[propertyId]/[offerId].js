import AmplifyInit from "amplify.config";
import DefaultHandler from "server/DefaultHandler";
import OfferModel from "server/models/OfferModel";

// REQUIRED ON ANY ROUTES WITH AUTH
AmplifyInit();

const ReadOffer = async (req, res) => {
  const { propertyId, offerId } = req.query;
  const offer = await OfferModel.get({ propertyId, offerId });
  if (!offer) res.status(400);
  return offer;
};

const DeleteOffer = async (req, res, user) => {
  const { propertyId, offerId } = req.query;
  const userAddress = user.attributes["custom:wallet"];

  const offer = await OfferModel.get({ propertyId, offerId });

  if (offer.buyerAddress !== userAddress) {
    res.status(401);
    throw Error("Not Authorized");
  }

  await OfferModel.delete({ propertyId, offerId });
  return res.send(offer.toJSON());
};

const handlers = {
  GET: {
    auth: false,
    origin: "",
    function: ReadOffer,
  },
  DELETE: {
    auth: true,
    origin: "",
    function: DeleteOffer,
  },
};

const handler = (req, res) => DefaultHandler(req, res, handlers);
export default handler;
