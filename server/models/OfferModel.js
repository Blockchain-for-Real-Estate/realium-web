import dynamoose from "dynamoose";
import { v4 as uuid } from "uuid";

dynamoose.aws.sdk.config.update({
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.ACCESS_SECRET,
  region: process.env.NEXT_PUBLIC_AWS_REGION,
});

const OfferSchema = new dynamoose.Schema(
  {
    propertyId: {
      type: String,
      required: true,
      hashKey: true,
    },
    offerId: {
      type: String,
      required: true,
      rangeKey: true,
      default: () => `${Date.now()}$${uuid()}`,
    },
    buyerAddress: {
      type: String,
      required: true,
      index: {
        name: "addressIndex",
        global: true,
        rangeKey: "propertyId",
      },
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  {
    saveUnknown: false,
    timestamps: true,
  }
);

const OfferModel = dynamoose.model("realium-offers", OfferSchema, {
  create: true,
  update: false,
});

export default OfferModel;
