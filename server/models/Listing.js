import dynamoose from "dynamoose";

dynamoose.aws.sdk.config.update({
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.ACCESS_SECRET,
  region: process.env.NEXT_PUBLIC_AWS_REGION,
});

const ListingSchema = new dynamoose.Schema(
  {
    propertyId: {
      type: String,
      required: true,
      hashKey: true,
    },
    sellerAddress: {
      type: String,
      required: true,
      rangeKey: true,
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

const ListingModel = dynamoose.model("realium-listings", ListingSchema, {
  create: true,
});

export default ListingModel;