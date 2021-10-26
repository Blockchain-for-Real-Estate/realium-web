import dynamoose from "dynamoose";
import { v4 as uuid } from "uuid";

const PropertySchema = new dynamoose.Schema(
  {
    propertyId: {
      type: String,
      hashKey: true,
      default: () => uuid(),
    },
    propertyName: {
      type: String,
      required: true,
    },
    propertyType: {
      type: String,
      default: () => "Residential",
    },
    smartContractAddress: {
      type: String,
      required: true,
    },
    llcName: {
      type: String,
    },
    address: {
      type: Set,
      required: true,
      schema: {
        streetAddress: {
          type: String,
          required: true,
        },
        city: {
          type: String,
          required: true,
        },
        state: {
          type: String,
          required: true,
        },
        zipCode: {
          type: String,
          required: true,
        },
        country: {
          type: String,
          default: () => "USA",
        },
      },
    },
    details: {
      type: Set,
      required: true,
      schema: {
        yearBuilt: {
          type: Number,
          required: true,
        },
        bedrooms: {
          type: Number,
          required: true,
        },
        bathrooms: {
          type: Number,
          required: true,
        },
        sqft: {
          type: Number,
          required: true,
        },
        acerage: {
          type: Number,
          required: true,
        },
        parkingSpaces: {
          type: Number,
          required: true,
        },
      },
    },
    description: {
      type: String,
      required: true,
    },
    images: {
      type: Set,
      schema: [String],
    },
  },
  {
    saveUnknown: false,
    timestamps: true,
  }
);

const PropertyModel = dynamoose.model("realium-properties", PropertySchema, {
  create: true,
});

export default PropertyModel;
