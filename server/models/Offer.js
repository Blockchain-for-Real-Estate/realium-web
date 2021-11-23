import dynamoose from "dynamoose";

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
    buyerAddress: {
      type: String,
      required: true,
      rangeKey: true,
      index: {
        name: "addressIndex",
        global: true,
      },
    },
    price: {
      type: Number,
      required: true,
    },
    count: {
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
  update: true,
});

export default OfferModel;
