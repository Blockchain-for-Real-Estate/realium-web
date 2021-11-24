import states from "src/data/states";
import dynamoose from "dynamoose";
import { v4 as uuid } from "uuid";

dynamoose.aws.sdk.config.update({
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.ACCESS_SECRET,
  region: process.env.NEXT_PUBLIC_AWS_REGION,
});

const PropertySchema = new dynamoose.Schema(
  {
    propertyId: {
      type: String,
      hashKey: true,
      default: () => uuid(),
    },
    propertyName: {
      type: String,
      inputType: "text",
      label: "Property Name",
      required: true,
    },
    propertyType: {
      type: String,
      inputType: "select",
      label: "Property Type",
      options: ["Residential"],
      required: true,
      default: () => "Residential",
    },
    smartContractAddress: {
      type: String,
      inputType: "text",
      label: "Smart Contract Address",
      required: true,
    },
    llcName: {
      type: String,
      inputType: "text",
      label: "LLC Name",
      required: true,
    },
    propertyDescription: {
      type: String,
      inputType: "textarea",
      label: "Description",
      required: true,
    },
    streetAddress: {
      type: String,
      inputType: "text",
      label: "Street Address",
      required: true,
    },
    city: {
      type: String,
      inputType: "text",
      label: "City",
      required: true,
    },
    state: {
      type: String,
      inputType: "select",
      label: "State",
      options: states,
      required: true,
    },
    zipCode: {
      type: String,
      inputType: "text",
      label: "Zip Code",
      required: true,
    },
    country: {
      type: String,
      required: true,
      inputType: "select",
      label: "Country",
      options: ["USA"],
      default: () => "USA",
    },
    yearBuilt: {
      type: Number,
      inputType: "number",
      label: "Year Built",
      required: true,
    },
    bedrooms: {
      type: Number,
      inputType: "number",
      label: "Bedrooms",
      required: true,
    },
    bathrooms: {
      type: Number,
      inputType: "number",
      label: "Bathrooms",
      required: true,
    },
    sqft: {
      type: Number,
      inputType: "number",
      label: "Square Footage",
      required: true,
    },
    acerage: {
      type: Number,
      inputType: "number",
      label: "Acerage",
      required: true,
    },
    parkingSpaces: {
      type: Number,
      inputType: "number",
      label: "Number of Parking Spaces",
      required: true,
    },
    images: {
      type: Set,
      inputType: "images",
      label: "Images",
      required: false,
      schema: [String],
    },
  },
  {
    saveUnknown: false,
    timestamps: true,
  }
);

const PropertyModel = dynamoose.model("realium-properties", PropertySchema, {
  create: false,
  update: false,
});

export default PropertyModel;
