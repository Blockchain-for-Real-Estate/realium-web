import AmplifyInit from "amplify.config";
import DefaultHandler from "server/DefaultHandler";
import OfferModel from "server/models/OfferModel";

// REQUIRED ON ANY ROUTES WITH AUTH
AmplifyInit();

const ReadOffersByProperty = async (req, res) => {
  const { propertyId } = req.query;
  const offers = await OfferModel.query({ propertyId })
    .sort("descending")
    .exec();
  return res.send(offers);
};

const CreateOffer = async (req, res, user) => {
  const { propertyId } = req.query;
  const userAddress = user.attributes["custom:wallet"];

  const offer = { propertyId, buyerAddress: userAddress, ...req.body };
  const newOffer = new OfferModel(offer);
  await newOffer.save();

  return res.send(newOffer.toJSON());
};

const handlers = {
  GET: {
    auth: false,
    origin: "",
    function: ReadOffersByProperty,
  },
  POST: {
    auth: true,
    origin: "",
    function: CreateOffer,
  },
};

const handler = (req, res) => DefaultHandler(req, res, handlers);
export default handler;
