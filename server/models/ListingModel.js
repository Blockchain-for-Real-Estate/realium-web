import dynamoose from "dynamoose";
import { v4 as uuid } from "uuid";

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
    listingId: {
      type: String,
      rangeKey: true,
      default: () => `${Date.now()}$${uuid()}`,
    },
    sellerAddress: {
      type: String,
      required: true,
      index: {
        name: "addressIndex",
        global: true,
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

const ListingModel = dynamoose.model("realium-listings", ListingSchema, {
  create: true,
  update: false,
});

export default ListingModel;
