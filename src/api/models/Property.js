import dynamoose from "dynamoose";
import { v4 as uuid } from "uuid";

const PropertySchema = new dynamoose.Schema(
  {
    propertyId: {
      type: String,
      hashKey: true,
      default: () => uuid(),
    },
    propertyName: String,
    propertyTypeId: Number,
    listingType: String,
    propertyType: String,
    legalTypeId: Number,
    avalancheAssetId: String,
    parcelId: String,
    streetAddress: String,
    city: String,
    state: String,
    zipCode: String,
    funded: Number,
    forcastedIncome: String,
    minInvestment: Number,
    maxInvestment: Number,
    yearBuilt: Number,
    country: String,
    acerage: Number,
    llc: String,
    seriesCount: Number,
    bedrooms: Number,
    bathrooms: Number,
    area: Number,
    lot: Number,
    parking: Number,
    investment: String,
    totalCapitalization: Number,
    netOperatingIncome: Number,
    estimatedAppreciation: Number,
    managementTeam: String,
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
  create: false,
});

export default PropertyModel;
